import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import BaseUtils from 'src/utils/base';

/**
 * Classify 的 VO
 * @constructor
 * @param {number} id - classify 的 id
 * @param {string} name - classify 的 name
 * @param {number} lastid - classify 的 lastid
 * @param {number} isshow - classify 的 isshow；传入 1 自动转换为 true ，0 自动转换为 false
 * @param {datetime} createtime - classify 的 createtime；传入的 datetime 格式自动转换为 11 位时间戳格式
 * @param {datetime} edittime - classify 的 edittime；传入的 datetime 格式自动转换为 11 位时间戳格式
 * @param {array} classifylist - classify 的 classifylist，默认值为 []
 * @class ClassifyVO
 */
export default class ClassifyVO {
  constructor({
    id,
    name,
    lastid,
    isshow,
    createtime,
    edittime,
    classifylist = [],
  }) {
    this.id = id;
    this.name = name;
    this.lastId = lastid;
    this.isShow = isshow ? true : false;
    this.createTime = BaseUtils.transformDate(createtime);
    this.editTime = edittime ? BaseUtils.transformDate(edittime) : null;
    this.classifyList = classifylist;
  }
  @ApiProperty()
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  lastId: number | null;

  @IsNotEmpty()
  isShow: boolean;

  @IsNotEmpty()
  createTime: number;

  editTime: number | null;

  classifyList: any[];
}
