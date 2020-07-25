import BaseEntity from './base.entity';
export default class Classify extends BaseEntity {
    id: number;
    name: string;
    lastid: number;
    isshow: number;
    createtime: string;
    edittime: string;
}
