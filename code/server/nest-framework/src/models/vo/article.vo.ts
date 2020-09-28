import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
import Article from 'src/models/entity/article.entity'
import BaseUtils from 'src/utils/base'

/**
 * Article 的 VO
 * @constructor
 * @param {number} id - article 的 id
 * @param {string} name - article 的 name
 * @param {number} classifyid - article 的 classifyid
 * @param {number} classify - article 的 classify
 * @param {string} mdtextarea - article 的 mdtextarea
 * @param {string} mdcontent - article 的 mdcontent，实质为 marked(mdtextarea)
 * @param {number} isshow - article 的 isshow；传入 1 自动转换为 true ，0 自动转换为 false
 * @param {datetime} createtime - article 的 createtime；传入的 datetime 格式自动转换为 11 位时间戳格式
 * @param {datetime} edittime - article 的 edittime；传入的 datetime 格式自动转换为 11 位时间戳格式 *
 * @class ArticleVO
 */
export default class ArticleVO {
  /**
   * article 返回的视图模型
   
   * @class ArticleVO
   */
  constructor(articledata: Article) {
    const {
      id,
      name,
      classifyid,
      isshow,
      createtime,
      edittime,
      mdtextarea,
      mdcontent,
      classify
    } = articledata
    this.id = id
    this.name = name
    this.classifyId = classifyid
    this.classifyName = classify.name
    this.isShow = isshow ? true : false
    this.createTime = BaseUtils.transformDate(createtime)
    this.editTime = edittime ? BaseUtils.transformDate(edittime) : null
    this.mdTextarea = mdtextarea
    this.mdContent = mdcontent
  }
  @ApiProperty()
  @IsNotEmpty()
  id: number

  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  classifyId: number

  classifyName: string

  @IsNotEmpty()
  isShow: boolean

  @IsNotEmpty()
  createTime: number

  editTime: number | null

  mdTextarea: string

  mdContent: string | null
}
