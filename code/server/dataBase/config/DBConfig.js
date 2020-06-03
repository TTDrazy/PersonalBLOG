import mysql from "mysql";

//配置 mysql 的连接池连接信息

const mysqlPool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "personalblog",
});
export default mysqlPool;
