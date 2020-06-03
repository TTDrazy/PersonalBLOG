import dbquery from "../modules/DBConnection";

let dbHelper = {
    //去数据库查询是一个异步行为
    query: (sql, resultInfo) => {
        return new Promise((resolve, reject) => {
            //调用公用的 dbquery 具体方法
            dbquery(sql, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    if (!!resultInfo) {
                        //判断是否缺少信息
                        resolve(`信息不完整!`);
                    } else {
                        resolve(result);
                    }
                }
            });
        });
    },
};
export default dbHelper;
