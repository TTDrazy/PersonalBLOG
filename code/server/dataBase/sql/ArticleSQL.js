let ArticleSQL = {
    qeuryAll: () => {
        return `select * from article`;
    },
    getById: (id) => {
        return `select * from article where id = ${id}`;
    },
    add: (data) => {
        let { id,name, classifyId, isShow, createTime,editTime, content } = data;
        return `insert into article
        (name, classifyId, isShow,createTime,editTime,content)
        values
        ('${name}', '${classifyId}', ${isShow}, '${createTime}', '${content}')`;
    },
    editById: (id, editContent) => {
        return;
    },
    removeById: (id) => {
        return `delete from article where id =${id}`;
    },
};
export default ArticleSQL;
