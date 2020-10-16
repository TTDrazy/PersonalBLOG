// id, name, classifyId, isShow, mdTextarea, mdContent
class AddDTO {
  constructor({ id, name, classifyId, isShow, mdTextarea, mdContent }) {
    this.id = id
    this.name = name
    this.classifyId = classifyId
    this.isShow = isShow
    this.mdTextarea = mdTextarea
    this.editTime = mdContent
  }
}
export default AddDTO
