import ArticleApi from '../../../api/article/ArticleApi'
export default class ArticleService {
    constructor(){
        this.articleApi = new ArticleApi();
    }
    async getArticleCardList(){
        
    }
}