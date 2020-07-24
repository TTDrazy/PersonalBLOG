import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { format } from 'silly-datetime';
/**
 * Classify  DTO --edit
 * @constructor
 * @param {number} id - classify 的 id
 * @param {string} name - classify 的 name
 * @param {string} lastId - classify 的 lastid
 * @param {number} isShow - classify 的 isshow；传入 true 自动转换为 1 ，false 自动转换为 0
 *
 * classify 的 edittime 自动取当前时间并转为数据库存储的 datetime 格式
 * @class ClassifyDTO
 */
export default class EditDTO {
  constructor({ id, name, lastId, isShow }) {
    this.id = id;
    this.name = name;
    this.lastid = lastId;
    this.isshow = isShow ? 1 : 0;
    this.edittime = format(new Date(), 'YYYY-MM-DD HH:mm:ss');
  }
  @ApiProperty()
  @IsNotEmpty()
  id: number;

  name: string | null;

  lastid: number;

  isshow: number | null;

  edittime: string;
}
