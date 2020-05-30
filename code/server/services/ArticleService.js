import dbHelper from "../dataBase/modules/DBHelper";
import ArticleSQL from "../dataBase/sql/ArticleSQL";

export default ArticleService= {
    getAll = () => {
        let result = dbHelper.query(ArticleSQL.qeuryAll);
        return result;
    }
}
