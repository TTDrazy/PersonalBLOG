// DTO 代表 server 需要接收的数据和返回的数据

export default class ArticleDTO {
    constructor({ name="默认", classifyId=1, content="我是内容", isShow = 1, createTime= new Date() }) {
        this.name = name;
        this.classifyId = classifyId;
        this.content = content;
        this.isShow = isShow ? 1 : 0;
        this.createTime = createTime
    }
}
