export default class ArticleModule {
    constructor({
        id,
        name,
        classifyId,
        content,
        isShow,
        createTime,
        editTime,
    }) {
        this.id = id;
        this.name = name;
        this.classifyId = classifyId;
        this.content = content;
        this.isShow = isShow;
        this.createTime = createTime;
        this.editTime = editTime;
    }
}
