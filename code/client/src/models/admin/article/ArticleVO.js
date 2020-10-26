import HandlerUtils from '@/utils/handler/HandlerUtils'
class ArticleVO {
  constructor({
    id,
    name,
    classifyId,
    classifyName,
    isShow,
    mdTextarea,
    mdContent,
    createTime,
    editTime,
  }) {
    this.id = id
    this.name = name
    this.classifyId = classifyId
    this.classifyName = classifyName
    this.isShow = isShow
    this.mdTextarea = mdTextarea
    this.mdContent = mdContent
    this.createTime = !!createTime
      ? HandlerUtils.transformTimestamp(createTime)
      : ''
    this.editTime = !!editTime ? HandlerUtils.transformTimestamp(editTime) : ''
  }
}
export default ArticleVO
