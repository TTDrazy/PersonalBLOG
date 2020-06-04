// DTO 代表 server 需要接收的数据和返回的数据
import { format } from "silly-datetime";

export default class AddDTO {
    constructor({
        name = "默认",
        classifyId = 1,
        content = "我是内容",
        isShow = 1,
    }) {
        this.name = name;
        this.classifyId = classifyId;
        this.content = content;
        this.isShow = isShow ? 1 : 0;
        this.createTime = format(new Date(), "YYYY-MM-DD HH:mm:ss");
    }
}
