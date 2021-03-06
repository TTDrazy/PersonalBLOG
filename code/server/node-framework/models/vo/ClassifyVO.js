// VO 代表 client 需要显示的数据

import { format } from "silly-datetime";

//转换 isShow 和 createTime 以及 editTime
export default class ClassifyVO {
    /**
     * classify 返回的视图模型
     * @constructor
     * @param {number} id - classify 的 id
     * @param {string} name - classify 的 name
     * @param {number} lastid - classify 的 lastid
     * @param {number} isshow - classify 的 isshow；传入 1 自动转换为 true ，0 自动转换为 false
     * @param {datetime} createtime - classify 的 createtime；传入的 datetime 格式自动转换为 11 位时间戳格式
     * @param {datetime} edittime - classify 的 edittime；传入的 datetime 格式自动转换为 11 位时间戳格式
     * @param {array} classifylist - classify 的 classifylist，默认值为 []
     * @class ClassifyVO
     */
    constructor({
        id,
        name,
        lastid,
        isshow,
        createtime,
        edittime,
        classifylist = [],
    }) {
        this.id = id;
        this.name = name;
        this.lastId = lastid;
        this.isShow = isshow ? true : false;
        this.createTime = createtime
            ? this.transformDate(createtime)
            : createtime;
        this.editTime = edittime ? this.transformDate(edittime) : edittime;
        this.classifyList = classifylist;
    }

    /**
     * 将指定时间转化成时间戳
     *
     * 通过 silly-datetime 中间件的 format 方法实现
     * @param {datetime} data - 需要转换的 datetime 格式时间
     * @return {number} 转换好的 11 位时间戳格式时间
     * @memberof ClassifyVO
     */
    transformDate = (date) => {
        let newDate = new Date(format(date, "YYYY-MM-DD HH:mm:ss"));
        return newDate.getTime();
    };
}
