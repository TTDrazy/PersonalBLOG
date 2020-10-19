import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
import { format } from 'silly-datetime'
/**
 * Article 新增 DTO
 * @export
 * @class ArticleDTO
 */
export default class AddDTO {
  constructor({
    name = '标题',
    classifyId = 1,
    isShow = 1,
    mdTextarea,
    mdContent,
  }) {
    this.name = name
    this.classifyid = classifyId
    this.isshow = isShow ? 1 : 0
    this.mdtextarea = mdTextarea ? mdTextarea : ''
    this.mdcontent = mdContent ? mdContent : ''
    this.createtime = format(new Date(), 'YYYY-MM-DD HH:mm:ss')
  }
  @ApiProperty()
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  classifyid: number

  @IsNotEmpty()
  isshow: number

  createtime: string

  mdtextarea: string | null

  mdcontent: string | null
}
