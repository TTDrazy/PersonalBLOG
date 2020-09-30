class ArticleCardVO {
  constructor({id,name,classifyName,editTime,briefContent}) {
    this.id = id,
    this.name = name,
    this.briefContent = briefContent,
    this.classifyName = classifyName,
    this.dateTime = editTime
  }
  id;
  name;
  briefContent;
  classifyName;
  dateTime;
}
export default ArticleCardVO
