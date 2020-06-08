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
        let { name, classifyList, isShow, createTime } = data;
        return `insert into classify
        (name,classifylist,isshow,createtime)
        values
        ('${name}', '${classifyList}', ${isShow}, '${createTime}')`;
    },
    edit: (data) => {
        let { id, name, classifyList, isShow, editTime } = data;
        return `update classify 
        set name = '${name}',classifylist = ${classifyList},isshow = ${isShow},edittime = '${editTime}'
        where id= ${id};`;
    },
    removeById: (id) => {
        return `delete from classify where id =${id}`;
    },
};
export default ClassifySQL;
