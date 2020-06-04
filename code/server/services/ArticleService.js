import dbHelper from "../dataBase/modules/DBHelper";
import ArticleSQL from "../dataBase/sql/ArticleSQL";

class ArticleService {
    getAll = () => {
        let result = new dbHelper().query(ArticleSQL.qeuryAll());
        return result;
    };
    getArticleById = (id) => {
        let result = new dbHelper().query(ArticleSQL.getById(id));
        return result;
    };
    addArticle = (articleData) => {
        let result = new dbHelper().query(ArticleSQL.add(articleData));
        return result;
    };
    editArticle = (articleData) => {
        let result = new dbHelper().query(ArticleSQL.edit(articleData));
        return result;
    };
    removeArticle = (id) => {
        let result = new dbHelper().query(ArticleSQL.removeById(id));
        return result;
    };
}

export default ArticleService;
