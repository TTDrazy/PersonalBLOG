import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { format } from 'silly-datetime';
/**
 * Article 修改 DTO
 * @export
 * @class ArticleDTO
 */
export default class EditDTO {
  constructor({ id, name, classifyId, isShow, mdTextarea, mdContent }) {
    this.id = id;
    this.name = name;
    this.classifyid = classifyId;
    this.isshow = isShow ? 1 : 0;
    this.mdtextarea = mdTextarea;
    this.mdcontent = mdContent ? mdContent : '';
    this.edittime = format(new Date(), 'YYYY-MM-DD HH:mm:ss');
  }
  @ApiProperty()
  @IsNotEmpty()
  id: number;

  name: string | null;

  classifyid: number | null;

  isshow: number | null;

  edittime: string;

  mdtextarea: string | null;

  mdcontent: string | null;
}
