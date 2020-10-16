import ArticleApi from '@/api/article/ArticleApi'
import ArticleCardVO from '@/models/home/article/ArticleCardVO'
import ArticleDetailVO from '@/models/home/article/ArticleDetailVO'

export default class ArticleService {
  constructor() {
    this.articleApi = new ArticleApi()
  }
  /**
   * 获取所有可以展示的的 Article 卡片列表信息，并按照时间倒序展示
   * 如果有修改时间按照修改时间排序，如果没有修改时间按照创建时间倒序排序
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
          //反序
          articleShowList.sort(function (a, b) {
            //Date.parse() 是将日期时间转换成毫秒进行对比
            return (
              Date.parse(b.dateTime.replace(/-/g, '/')) -
              Date.parse(a.dateTime.replace(/-/g, '/'))
            )
          })
          resolve(articleShowList)
        }
      })
    })
  }
  /**
   * 根据 articleId 获取 Article 的详细信息
   * @param articleId 文章 id
   * @memberof ArticleService
   */
  async getArticleDetailById(articleId) {
    return new Promise((resolve) => {
      this.articleApi.getById(articleId).then((response) => {
        let { statusCode, data } = response.data
        if (statusCode === 0 && data !== undefined) {
          let articleDetail = new ArticleDetailVO(data)
          resolve(articleDetail)
        }
      })
    })
  }
}
