import mysqlPool from "../config/DBConfig";

export default function dbquery(sql, callback) {
    //连接 连接池
    mysqlPool.getConnection((err, connection) => {
        //每次连接都需要 query 去查询数据库，都会 callback 回去
        connection.query(sql, (err, rows) => {
            callback(err, rows);
            //从连接池中释放，放入缓冲池中，待使用再拉起来
            connection.release();
        });
    });
}
