import express from "express";

export default class App {
    constructor({ port, routes }) {
        this.port = port;
        this.routes = routes;
        this.app = express();
        this.initial();
        this.initialRouter();
    }
    initial() {
        //设置允许跨域访问该服务.
        this.app.all("*", function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
            res.header("Access-Control-Allow-Headers", "Content-Type");
            res.header("Access-Control-Allow-Methods", "*");
            res.header("Content-Type", "application/json;charset=utf-8");
            next();
        });
    }
    //初始化添加其他路由信息
    initialRouter() {
        if (this.routes.length > 0) {
            this.routes.map((item) => {
                this.app.use(item.pathName, item.router);
            });
        }
    }
    start() {
        this.app.get("/", (req, res) => {
            res.send("Hello");
            res.end();
        });
        this.app.listen(this.port, () => {
            console.log(`listening on port ${this.port}!`);
        });
    }
}
