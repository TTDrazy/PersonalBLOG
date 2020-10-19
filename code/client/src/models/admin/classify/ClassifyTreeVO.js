// import HandlerUtils from '@/utils/handler/HandlerUtils'
class ClassifyTreeVO {
  id
  name
 
  isShow
  children
  constructor({ id, name, isShow, children }) {
    this.id = id
    this.name = name
    this.isShow = isShow
    this.children = children
  }
}
export default ClassifyTreeVO
