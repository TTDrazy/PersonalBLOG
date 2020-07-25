import { ArticleService } from 'src/service/article.service';
import ArticleVO from 'src/models/vo/article.vo';
export declare class ArticleController {
    private articleService;
    constructor(articleService: ArticleService);
    getList(): Promise<any>;
    getOneById(id: number): Promise<ArticleVO>;
    addOne(article: any): Promise<ArticleVO>;
    editOne(article: any): Promise<any>;
    removeOneById(id: any): Promise<any>;
}
