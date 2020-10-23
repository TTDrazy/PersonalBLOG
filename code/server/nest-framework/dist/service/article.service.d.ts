import Article from 'src/models/entity/article.entity';
import { Repository } from 'typeorm';
export declare class ArticleService {
    private articleRepository;
    constructor(articleRepository: Repository<Article>);
    getList(): Promise<any>;
    findOne(id: number): Promise<Article>;
    addOne(article: any): any;
    editOne(article: any): any;
    removeById(id: number): any;
}
