import HandlerUtils from '../../../utils/handler/HandlerUtils'
class ArticleDetailVO {
  articleId
  articleName
  createTime
  editTime
  mdContent
  classifyId
  classifyName
  constructor({
    id,
    name,
    classifyId,
    classifyName,
    createTime,
    editTime,
    mdContent,
  }) {
    this.articleId = id
    this.articleName = name
    this.mdContent = mdContent
    this.classifyName = classifyName
    this.classifyId = classifyId
    this.createTime = HandlerUtils.transformTimestamp(createTime) // 将 13 位时间戳转为正常时间格式
    this.editTime = HandlerUtils.transformTimestamp(editTime) // 将 13 位时间戳转为正常时间格式
  }
}
export default ArticleDetailVO
