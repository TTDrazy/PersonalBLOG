// DTO 代表 server 需要接收的数据和返回的数据
import { format } from "silly-datetime";

export default class EditDTO {
    constructor({ id, name, lastId, isShow }) {
        this.id = id;
        this.name = name;
        this.lastId = lastId;
        this.isShow = isShow ? 1 : 0;
        this.editTime = format(new Date(), "YYYY-MM-DD HH:mm:ss");
    }
}
