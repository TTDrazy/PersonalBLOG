import BaseEntity from './base.entity';
export default class Article extends BaseEntity {
    id: number;
    name: string;
    classifyid: number;
    isshow: number;
    createtime: string;
    edittime: string;
    mdtextarea: string;
    mdcontent: string;
}
