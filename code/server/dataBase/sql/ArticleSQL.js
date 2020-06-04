//因为是返回值都是常量字符串这种，所以可以不用 class 类的写法
let ArticleSQL = {
    qeuryAll: () => {
        return `select * from article`;
    },
    getById: (id) => {
        return `select * from article where id = ${id}`;
    },
    add: (data) => {
        let { name, classifyId, isShow, createTime, content } = data;
        return `insert into article
        (name,classifyId,isShow,createTime,content)
        values
        ('${name}', ${classifyId}, ${isShow}, '${createTime}', '${content}')`;
    },
    edit: (data) => {
        let { id, name, classifyId, isShow, editTime, content } = data;
        return `update article 
        set name = '${name}',classifyId = ${classifyId},isShow = ${isShow},editTime = '${editTime}',content = '${content}'
        where id= ${id};`;
    },
    removeById: (id) => {
        return `delete from article where id =${id}`;
    },
};
export default ArticleSQL;
