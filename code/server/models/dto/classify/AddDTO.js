// DTO 代表 server 需要接收的数据和返回的数据
import { format } from "silly-datetime";

export default class AddDTO {
    constructor({ name = "默认", lastId, isShow = 1 }) {
        this.name = name;
        this.lastid = lastId?lastId:null;
        this.isshow = isShow ? 1 : 0;
        this.createtime = format(new Date(), "YYYY-MM-DD HH:mm:ss");
    }
}
