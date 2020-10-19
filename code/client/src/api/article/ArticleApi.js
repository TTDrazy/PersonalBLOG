import Axios from '../../utils/axios/AxiosHelper'

const commonRoot = '/article'

class ArticleApi {
  /**
   * 获取所有的 Article 信息
   *
   * @memberof ArticleApi
   */
  async getAll() {
    let response = await Axios.get(commonRoot)
    return response
  }

  /**
   * 根据 Article-id 获取该条 Article 信息
   * @param id - Article-id
   * @memberof ArticleApi
   */
  async getById(id) {
    let response = await Axios.get(`${commonRoot}/${id}`)
    return response
  }
  /**
   * 新增一条 Article 信息
   * @param articleAddDTO 包含有 id, name, classifyId, isShow, mdTextarea, mdContent  的 articleAddDTO 对象
   * @memberof ArticleApi
   */
  async addArticle(articleAddDTO) {
    let response = await Axios.post(commonRoot, articleAddDTO)
    return response
  }
  /**
   * 修改该条 Article 信息
   *
   * 包含有 id, name, classifyId, isShow, mdTextarea, mdContent  的 articleEditDTO 对象
   *
   * @memberof ArticleApi
   */
  async editArticle(articleEditDTO) {
    let response = await Axios.put(commonRoot, articleEditDTO)
    return response
  }
  /**
   * 根据 Article-id 删除该条 Article 信息
   * @param id - Article-id
   * @memberof ArticleApi
   */
  async removeById(id) {
    let response = await Axios.delete(`${commonRoot}/${id}`)
    return response
  }
}

export default ArticleApi
