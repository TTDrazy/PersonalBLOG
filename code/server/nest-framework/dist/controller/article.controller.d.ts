import { ArticleService } from 'src/service/article.service';
import Article from 'src/models/entity/article.entity';
import ArticleVO from 'src/models/vo/article.vo';
export declare class ArticleController {
    private articleService;
    constructor(articleService: ArticleService);
    getList(): Promise<any>;
    getOneById(id: number): Promise<ArticleVO>;
    addOne(article: any): Promise<Article>;
    editOne(article: any): Promise<any>;
    removeOneById(id: any): Promise<any>;
}
