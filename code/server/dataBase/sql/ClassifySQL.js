//因为是返回值都是常量字符串这种，所以可以不用 class 类的写法
let ClassifySQL = {
    qeuryAll: () => {
        return `select * from classify`;
    },
    getNameById: (id) => {
        return `select name,lastId from classify where id = ${id}`;
    },
    getById: (id) => {
        return `select * from classify where id = ${id}`;
    },
    add: (data) => {
        let { name, lastid, isshow, createtime } = data;
        return `insert into classify
        (name,lastid,isshow,createtime)
        values
        ('${name}', ${lastid}, ${isshow}, '${createtime}')`;
    },
    edit: (data) => {
        let { id, name, lastid, isshow, edittime } = data;
        return `update classify 
        set name = '${name}',lastid = ${lastid},isshow = ${isshow},edittime = '${edittime}'
        where id= ${id};`;
    },
    removeById: (id) => {
        return `delete from classify where id =${id}`;
    },
};
export default ClassifySQL;
