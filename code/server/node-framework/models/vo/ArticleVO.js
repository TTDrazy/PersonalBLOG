// VO 代表 client 需要显示的数据

import { format } from "silly-datetime";

//转换 isShow 和 createTime 以及 editTime
export default class ArticleVO {
    /**
     * article 返回的视图模型
     * @constructor
     * @param {number} id - article 的 id
     * @param {string} name - article 的 name
     * @param {number} classifyid - article 的 classifyid
     * @param {string} mdtextarea - article 的 mdtextarea
     * @param {string} mdcontent - article 的 mdcontent，实质为 marked(mdtextarea)
     * @param {number} isshow - article 的 isshow；传入 1 自动转换为 true ，0 自动转换为 false
     * @param {datetime} createtime - article 的 createtime；传入的 datetime 格式自动转换为 11 位时间戳格式
     * @param {datetime} edittime - article 的 edittime；传入的 datetime 格式自动转换为 11 位时间戳格式
     * @class ArticleVO
     */
    constructor({
        id,
        name,
        classifyid,
        mdtextarea,
        mdcontent,
        isshow,
        createtime,
        edittime,
    }) {
        this.id = id;
        this.name = name;
        this.classifyId = classifyid;
        this.mdTextarea = mdtextarea;
        this.mdContent = mdcontent;
        this.isShow = isshow ? true : false;
        this.createTime = createtime
            ? this.transformDate(createtime)
            : createtime;
        this.editTime = edittime ? this.transformDate(edittime) : edittime;
    }
    /**
     * 将指定时间转化成时间戳
     *
     * 通过 silly-datetime 中间件的 format 方法实现
     * @param {datetime} data - 需要转换成为 11 位时间戳格式的 datetime 格式时间
     * @return {number} 转换好的 11 位时间戳格式时间
     * @memberof ClassifyVO
     */
    transformDate = (date) => {
        let newDate = new Date(format(date, "YYYY-MM-DD HH:mm:ss"));
        return newDate.getTime();
    };
}
