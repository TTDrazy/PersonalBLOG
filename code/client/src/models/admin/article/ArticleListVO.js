import HandlerUtils from '@/utils/handler/HandlerUtils'
class ArticleListVO {
  constructor({ id, name, classifyName, isShow, createTime, editTime }) {
    this.id = id
    this.name = name
    this.classifyName = classifyName
    this.isShow = isShow
    this.createTime = HandlerUtils.transformTimestamp(createTime)
    this.editTime = !!editTime?HandlerUtils.transformTimestamp(editTime):''
  }
}
export default ArticleListVO
