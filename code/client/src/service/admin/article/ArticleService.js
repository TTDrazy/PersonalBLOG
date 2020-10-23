import ArticleApi from '@/api/article/ArticleApi'
import ArticleListVO from '@/models/admin/article/ArticleListVO'
import ArticleVO from '@/models/admin/article/ArticleVO'
import AddDTO from '@/models/admin/article/AddDTO'
import EditDTO from '@/models/admin/article/EditDTO'

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
            } else {
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

  /**
   * 根据 id 查询某一条 article 的信息
   * @memberof ArticleService
   */
  async getArticleById(id) {
    return new Promise((resolve) => {
      this.articleApi.getById(id).then((response) => {
        let { statusCode, data } = response.data
        if (statusCode === 0 && data !== undefined) {
          let article = new ArticleVO(data)
          resolve(article)
        }
      })
    })
  }

  /**
   * 添加一条 article
   * @param articleInfo 包含有 name, classifyId, isShow, mdTextarea, mdContent  的 articleAddDTO 对象
   * @memberof ArticleService
   */
  async addArticle(articleInfo) {
    // console.log(new AddDTO(articleInfo))
    return new Promise((resolve) => {
      this.articleApi.addArticle(new AddDTO(articleInfo)).then((response) => {
        let { statusCode, data } = response.data
        if (statusCode === 0 && data !== undefined) {
          resolve(data)
        }
      })
    })
  }

  /**
   * 修改一条 article
   * @param articleInfo 包含有 id, name, classifyId, isShow, mdTextarea, mdContent  的 articleEditDTO 对象
   * @memberof ArticleService
   */
  async editArticle(articleInfo) {
    return new Promise((resolve) => {
      this.articleApi.editArticle(new EditDTO(articleInfo)).then((response) => {
        let { statusCode, data } = response.data
        if (statusCode === 0 && !!data.affected) {
          resolve(new EditDTO(articleInfo))
        }
      })
    })
  }

  /**
   * 根据 id 删除一条 article
   * @param id articleId
   * @memberof ArticleService
   */
  async removeArticleById(id) {
    return new Promise((resolve) => {
      this.articleApi.removeById(id).then((response) => {
        let { statusCode, data } = response.data
        if (statusCode === 0 && !!data.affected) {
          resolve(id)
        }
      })
    })
  }
}
