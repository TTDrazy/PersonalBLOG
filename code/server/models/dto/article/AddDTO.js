// DTO 代表 server 需要接收的数据和返回的数据
import { format } from "silly-datetime";

export default class AddDTO {
    /**
     * article 存储的数据库模型 - add
     * @constructor
     * @param {string} name - article 的 name，默认值为 "默认"
     * @param {number} classifyId - article 的 classifyid，默认值为 1
     * @param {string} content - article 的 content，默认值为 "我是内容"
     * @param {number} isShow - article 的 isshow，默认值为 1；传入 true 自动转换为 1 ，false 自动转换为 0
     *
     * article 的 createtime 自动取当前时间并转为数据库存储的 datetime 格式
     * @class AddDTO
     */
    constructor({
        name = "默认",
        classifyId = 1,
        content = "我是内容",
        isShow = 1,
    }) {
        this.name = name;
        this.classifyid = classifyId;
        this.content = content;
        this.isshow = isShow ? 1 : 0;
        this.createtime = format(new Date(), "YYYY-MM-DD HH:mm:ss");
    }
}
