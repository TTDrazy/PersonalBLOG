import ArticleApi from '@/api/article/ArticleApi'
import ArticleListVO from '@/models/admin/article/ArticleListVO'

export default class ArticleService {
  constructor() {
    this.articleApi = new ArticleApi()
  }
  /**
   * 获取所有可以展示的的 Article table 列表信息，并按照时间倒序展示
   * 如果有修改时间按照修改时间排序，如果没有修改时间按照创建时间倒序排序
   * @memberof ArticleService
   */
  async getArticleTableList() {
    return new Promise((resolve) => {
      this.articleApi.getAll().then((response) => {
        let { statusCode, data } = response.data
        if (statusCode === 0 && data !== undefined) {
          let articleShowList = []
          data.map((item) => {
            articleShowList.push(new ArticleListVO(item))
          })
          //反序
          articleShowList.sort(function (a, b) {
            //Date.parse() 是将日期时间转换成毫秒进行对比
            if (!!a.editTime && b.editTime) {
              return (
                Date.parse(b.editTime.replace(/-/g, '/')) -
                Date.parse(a.editTime.replace(/-/g, '/'))
              )
            }else{
              return (
                Date.parse(b.createTime.replace(/-/g, '/')) -
                Date.parse(a.createTime.replace(/-/g, '/'))
              )
            }
          })
          resolve(articleShowList)
        }
      })
    })
  }
}
