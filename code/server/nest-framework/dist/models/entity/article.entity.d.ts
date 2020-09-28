import BaseEntity from './base.entity';
import Classify from './classify.entity';
export default class Article extends BaseEntity {
    id: number;
    name: string;
    classify: Classify;
    classifyid: number;
    isshow: number;
    createtime: string;
    edittime: string;
    mdtextarea: string;
    mdcontent: string;
}
