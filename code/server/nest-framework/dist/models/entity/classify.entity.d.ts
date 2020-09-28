import BaseEntity from './base.entity';
import Article from './article.entity';
export default class Classify extends BaseEntity {
    id: number;
    name: string;
    articles: Article[];
    lastid: number;
    isshow: number;
    createtime: string;
    edittime: string;
}
