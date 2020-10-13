import ArticleApi from '../../../api/article/ArticleApi'
import ArticleCardVO from '../../../models/home/article/ArticleCardVO'

export default class ArticleService {
  constructor() {
    this.articleApi = new ArticleApi()
  }
  /**
   * 获取所有可以展示的的 Article 卡片列表信息
   * @memberof ArticleService
   */
  async getArticleCardList() {
    return new Promise((resolve) => {
      this.articleApi.getAll().then((response) => {
        let { statusCode, data } = response.data
        if (statusCode === 0 && data !== undefined) {
          let articleList = data.filter((item) => item.isShow === true)
          let articleShowList = []
          articleList.map((item) => {
            articleShowList.push(new ArticleCardVO(item))
          })
          resolve(articleShowList)
        }
      })
    })
  }
}
