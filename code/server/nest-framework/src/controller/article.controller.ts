import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common'
import { ArticleService } from 'src/service/article.service'
import { ApiTags } from '@nestjs/swagger'
import AddDTO from '../models/dto/article/add.dto'
import Article from 'src/models/entity/article.entity'
import ArticleVO from 'src/models/vo/article.vo'
import EditDTO from '../models/dto/article/edit.dto'

@ApiTags('博客类型')
@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  /**
   * 获取所有的 Article 信息
   * @returns Article 的 List 集合
   * @memberof ArticleController
   */
  @Get()
  async getList(): Promise<any> {
    const articleData = await this.articleService.getList()
    let articleList = []
    articleData.map((item: Article) => {  
      let articleItem = new ArticleVO(item)
      articleList.push(articleItem)
    })
    return articleList
  }
  /**
   * 根据 articleid 获取文章信息
   * @param {number} id
   * @returns {Promise<ArticleVO>}
   * @memberof ArticleController
   */
  @Get(':id')
  async getOneById(@Param() id: number): Promise<ArticleVO> {
    const articleData = await this.articleService.findOne(id)
    if (!!articleData) {
      const articleInfo = new ArticleVO(articleData)
      return articleInfo
    }
    // return await this.articleService.findOne(id)
  }

  /**
   * 添加一条 article 信息
   * @param {*} article 需要添加的 article 信息
   * @returns {Promise<ArticleVO>} 返回数据库成功存储的 article VO信息
   * @memberof ArticleController
   */
  @Post()
  async addOne(@Body() article): Promise<ArticleVO> {
    const articleData = new AddDTO(article)
    const articleObj = await this.articleService.addOne(articleData)
    const articleInfo = new ArticleVO(articleObj)
    return articleInfo
  }

  /**
   * 根据 id 修改一条 article 消息
   * @param {*} article 需要修改的 article 信息
   * @returns 数据库存储信息
   * @memberof ArticleController
   */
  @Put()
  async editOne(@Body() article) {
    const articleData = new EditDTO(article)
    const databaseInfo = await this.articleService.editOne(articleData)
    return databaseInfo
  }

  /**
   * 根据 id 删除一条 article 消息
   * @param {*} id article ID
   * @returns 数据库存储信息
   * @memberof ArticleController
   */
  @Delete(':id')
  async removeOneById(@Param() id) {
    return await this.articleService.removeById(id)
  }
}
