// DTO 代表 server 需要接收的数据和返回的数据
import { format } from "silly-datetime";

export default class EditDTO {
    /**
     * classify 存储的数据库模型 - edit
     * @constructor
     * @param {number} id - classify 的 id
     * @param {string} name - classify 的 name
     * @param {string} lastId - classify 的 lastid
     * @param {number} isShow - classify 的 isshow；传入 true 自动转换为 1 ，false 自动转换为 0
     *
     * classify 的 edittime 自动取当前时间并转为数据库存储的 datetime 格式
     * @class EditDTO
     */
    constructor({ id, name, lastId, isShow }) {
        this.id = id;
        this.name = name;
        this.lastid = lastId;
        this.isshow = isShow ? 1 : 0;
        this.edittime = format(new Date(), "YYYY-MM-DD HH:mm:ss");
    }
}
