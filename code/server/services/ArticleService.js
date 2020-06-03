import dbHelper from "../dataBase/modules/DBHelper";
import ArticleSQL from "../dataBase/sql/ArticleSQL";

let ArticleService = {
    getAll: () => {
        let result = dbHelper.query(ArticleSQL.qeuryAll);
        return result;
    },
    getArticleById: (id) => {
        let result = dbHelper.query(ArticleSQL.getById(id));
        return result;
    },
    addArticle: (articleData) => {
        let result = dbHelper.query(ArticleSQL.add(articleData));
        return result;
    },
    editArticle: (id, editContent) => {},
    removeArticle: (id) => {
        let result = dbHelper.query(ArticleSQL.removeById(id));
        return result;
    },
};

export default ArticleService;
