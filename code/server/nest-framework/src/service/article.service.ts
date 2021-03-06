import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import Article from 'src/models/entity/article.entity'
import { Repository } from 'typeorm'

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private articleRepository: Repository<Article>
  ) {}

  /**
   * 获取所有 Article 信息
   * @returns {Promise<Article[]>} 所有 Article 信息并形成数组
   * @memberof ArticleService
   */
  public async getList(): Promise<any> {
    return this.articleRepository.find({ relations: ['classify'] })
  }

  /**
   * 根据 Article Id 获取一条 Article 信息
   * @param {number} id Article Id
   * @returns {Promise<Article>} Article 信息
   * @memberof ArticleService
   */
  public findOne(id: number): Promise<Article> {
    // this.articleRepository.findOneOrFail(id); // 以id搜寻，没找到会丢出例外
    return this.articleRepository.findOne(id, { relations: ['classify'] })
  }

  /**
   * 添加一条 article 信息
   * @param {*} article 传过来的经过规范的 article AddDTO 模型
   * @returns {Promise<Article>} 未经过规范的此条 article 存储 VO 模型
   * @memberof ArticleService
   */
  public addOne(article): any {
    return this.articleRepository.save(article)
  }

  /**
   * 根据 id 修改一条 article 信息
   * @param {*} article 传过来的经过规范的 article EditDTO 模型
   * @returns {*} 数据库存储信息
   * @memberof ArticleService
   */
  public editOne(article): any {
    return this.articleRepository.update(article.id, article)
  }

  /**
   * 根据 id 删除一条 article 信息
   * @param {number} id article ID
   * @returns {*} 数据库存储信息
   * @memberof ArticleService
   */
  public removeById(id: number): any {
    return this.articleRepository.delete(id)
  }
}
