// VO 代表 client 需要显示的数据

import { format } from "silly-datetime";

//转换 isShow 和 createTime 以及 editTime
export default class ArticleVO {
    constructor({ id, name, lastid,isshow, createtime, edittime, classifylist=[] }) {
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

    transformDate = (date) => {
        // 将指定时间转化成时间戳
        let newDate = new Date(format(date, "YYYY-MM-DD HH:mm:ss"));
        return newDate.getTime();
    };
}
