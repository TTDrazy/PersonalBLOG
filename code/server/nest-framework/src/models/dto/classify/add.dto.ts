import { ApiProperty } from '@nestjs/swagger';
import { format } from 'silly-datetime';
/**
 * classify DTO - add
 * @constructor
 * @param {string} name - classify 的 name，默认值为 "默认"
 * @param {string} lastId - classify 的 lastid，默认值为 null
 * @param {number} isShow - classify 的 isshow，默认值为 1；传入 true 自动转换为 1 ，false 自动转换为 0
 *
 * classify 的 createtime 自动取当前时间并转为数据库存储的 datetime 格式
 * @class AddDTO
 */
export default class AddDTO {
  constructor({ name = '默认', lastId, isShow = 1 }) {
    this.name = name;
    this.lastid = lastId ? lastId : null;
    this.isshow = isShow ? 1 : 0;
    this.createtime = format(new Date(), 'YYYY-MM-DD HH:mm:ss');
  }
  @ApiProperty()
  name: string | null;

  lastid: number|null;

  isshow: number | null;

  createtime: string;
}
