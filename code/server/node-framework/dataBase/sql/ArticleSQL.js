//因为是返回值都是常量字符串这种，所以可以不用 class 类的写法
let ArticleSQL = {
    qeuryAll: () => {
        return `select * from article`;
    },
    getById: (id) => {
        return `select * from article where id = ${id}`;
    },
    add: (data) => {
        let {
            name,
            classifyid,
            isshow,
            createtime,
            mdtextarea,
            mdcontent,
        } = data;
        return `insert into article
        (name,classifyid,isshow,createtime,mdtextarea,mdcontent)
        values
        ('${name}', ${classifyid}, ${isshow}, '${createtime}', '${mdtextarea}','${mdcontent}')`;
    },
    edit: (data) => {
        let {
            id,
            name,
            classifyid,
            isshow,
            edittime,
            mdtextarea,
            mdcontent,
        } = data;
        return `update article 
        set name = '${name}',classifyid = ${classifyid},isshow = ${isshow},edittime = '${edittime}',mdtextarea = '${mdtextarea}',mdcontent = '${mdcontent}'
        where id= ${id};`;
    },
    removeById: (id) => {
        return `delete from article where id =${id}`;
    },
};
export default ArticleSQL;
