import Article from 'src/models/entity/article.entity';
export default class ArticleVO {
    constructor(articledata: Article);
    id: number;
    name: string;
    classifyId: number;
    classifyName: string;
    isShow: boolean;
    createTime: number;
    editTime: number | null;
    mdTextarea: string;
    mdContent: string | null;
}
