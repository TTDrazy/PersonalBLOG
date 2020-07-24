import dbHelper from "../dataBase/modules/DBHelper";
import ArticleSQL from "../dataBase/sql/ArticleSQL";
/**
 * article 的 service 层
 * @class ArticleService
 */
class ArticleService {
    /**
     * 获取所有的 article
     * @return {promise} 包含查询所有 article 的 Promise
     * @memberof ArticleService
     */
    getAll = () => {
        let result = new dbHelper().query(ArticleSQL.qeuryAll());
        return result;
    };
    /**
     * 通过 article 的 id 获取此条 article
     * @param {number} id - article 的 id
     * @return {promise} 包含查询该条 article 的 Promise
     * @memberof ArticleService
     */
    getArticleById = (id) => {
        let result = new dbHelper().query(ArticleSQL.getById(id));
        return result;
    };
    /**
     * 添加 articleData 的数据进入数据库
     * @param {object} articleData - 包含有 name, classifyId, isShow, mdTextarea, mdContent 的 article AddDTO 对象
     * @return {promise} 包含添加该条 article 结果的 Promise
     * @memberof ArticleService
     */
    addArticle = (articleData) => {
        let result = new dbHelper().query(ArticleSQL.add(articleData));
        return result;
    };
    /**
     * 在数据库中修改 id 为 articleData.id 的 article 的数据
     * @param {object} articleData - 包含有 id, name, classifyId, isShow, mdTextarea, mdContent  的 article EditDTO 对象
     * @return {promise} 包含修改该条 article 结果的 Promise
     * @memberof ArticleService
     */
    editArticle = (articleData) => {
        let result = new dbHelper().query(ArticleSQL.edit(articleData));
        return result;
    };
    /**
     * 通过 article 的 id 删除此条 article
     * @param {number} id - article 的 id
     * @return {promise} 包含删除该条 article 的 Promise
     * @memberof ArticleService
     */
    removeArticle = (id) => {
        let result = new dbHelper().query(ArticleSQL.removeById(id));
        return result;
    };
}

export default ArticleService;
