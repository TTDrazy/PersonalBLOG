//因为是返回值都是常量字符串这种，所以可以不用 class 类的写法
let ClassifySQL = {
    qeuryAll: () => {
        return `select * from classify`;
    },
    getById: (id) => {
        return `select * from classify where id = ${id}`;
    },
    add: (data) => {
        let { name, classifyList, isShow, createTime} = data;
        return `insert into classify
        (name,classifyList,isShow,createTime)
        values
        ('${name}', '${classifyList}', ${isShow}, '${createTime}')`;
    },
    edit: (data) => {
        let { id, name, classifyList, isShow, editTime} = data;
        return `update classify 
        set name = '${name}',classifyList = ${classifyList},isShow = ${isShow},editTime = '${editTime}'
        where id= ${id};`;
    },
    removeById: (id) => {
        return `delete from classify where id =${id}`;
    },
};
export default ClassifySQL;
