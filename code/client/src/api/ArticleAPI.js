import Axios from "axios";
export default class ArticleAPI {
    /**
     * 获取所有的 Article 信息
     *
     * @memberof ArticleAPI
     */
    getAll = async () => {
        let response = await Axios.get("http://localhost:8080/article");
        return response;
    };
    /**
     * 根据 Article-id 获取该条 Article 信息
     * @param id - Article-id
     * @memberof ArticleAPI
     */
    getById = async (id) => {
        let response = await Axios.get(`http://localhost:8080/article/${id}`);
        return response;
    };
    /**
     * 新增该条 Article 信息
     * 
     * 包含有 name, classifyId, isShow, mdTextarea, mdContent  的 articleData 对象
     * 
     * @memberof ArticleAPI
     */
    addArticle = async(articleData)=>{
        let response = await Axios.post("http://localhost:8080/article",articleData);
        return response;
    }
    /**
     * 修改该条 Article 信息
     * 
     * 包含有 id, name, classifyId, isShow, mdTextarea, mdContent  的 articleData 对象
     * 
     * @memberof ArticleAPI
     */
    editArticle = async(articleData)=>{
        let response = await Axios.put("http://localhost:8080/article",articleData);
        return response;
    }
    /**
     * 根据 Article-id 删除该条 Article 信息
     * @param id - Article-id
     * @memberof ArticleAPI
     */
    removeById = async (id) => {
        let response = await Axios.delete(`http://localhost:8080/article/${id}`);
        return response;
    };
}
