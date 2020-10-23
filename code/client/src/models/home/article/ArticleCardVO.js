import HandlerUtils from '../../../utils/handler/HandlerUtils'
class ArticleCardVO {
  id
  name
  briefContent
  classifyName
  dateTime
  classifyId
  constructor({ id, name, classifyId, classifyName, editTime, mdTextarea }) {
    this.id = id
    this.name = name
    this.briefContent = mdTextarea.slice(0, 85) // 待将 mdTextarea 或 mdContent 去除多余格式转为纯内容缩略格式
    this.classifyName = classifyName
    this.classifyId = classifyId
    this.dateTime = HandlerUtils.transformTimestamp(editTime) // 将 13 位时间戳转为正常时间格式
  }
}
export default ArticleCardVO
