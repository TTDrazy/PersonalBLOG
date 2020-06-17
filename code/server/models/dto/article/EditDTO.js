// DTO 代表 server 需要接收的数据和返回的数据
import { format } from "silly-datetime";

export default class EditDTO {
    /**
     * article 存储的数据库模型 - edit
     * @constructor
     * @param {number} id - article 的 id
     * @param {string} name - article 的 name
     * @param {number} classifyId - article 的 classifyid
     * @param {string} mdtextarea - article 的 mdtextarea，默认值为 "我是内容"
     * @param {string} mdcontent - article 的 mdcontent，实质为 marked(mdtextarea)
     * @param {number} isShow - article 的 isshow；传入 true 自动转换为 1 ，false 自动转换为 0
     *
     * article 的 edittime 自动取当前时间并转为数据库存储的 datetime 格式
     * @class EditDTO
     */
    constructor({ id, name, classifyId, mdTextarea, mdContent, isShow }) {
        this.id = id;
        this.name = name;
        this.classifyid = classifyId;
        this.mdtextarea = mdTextarea;
        this.mdcontent = mdContent;
        this.isshow = isShow ? 1 : 0;
        this.edittime = format(new Date(), "YYYY-MM-DD HH:mm:ss");
    }
}
