import express from "express";
import bodyParser from "body-parser";

export default class App {
    /**
     * 配置服务器信息
     * @constructor
     * @param {number} port - 服务器运行的端口号
     * @param {array} routes - 需要挂载的集合了所有路由的数组
     * @class App
     */
    constructor({ port, routes }) {
        this.port = port;
        this.routes = routes;
        this.app = express();
        this.initial();
        this.initialRouter();
    }

    /**
     * 设置允许跨域访问该服务
     *
     * 利用 body-parser 中间件支持 req.body 来获取数据
     * @memberof App
     */
    initial() {
        this.app.all("*", function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
            res.header("Access-Control-Allow-Headers", "Content-Type");
            res.header("Access-Control-Allow-Methods", "*");
            res.header("Content-Type", "application/json;charset=utf-8");
            next();
        });
        //支持 req.body 来获取数据
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    /**
     * 初始化添加其他路由信息
     *
     * 遍历 App.routes 属性，利用 App.app.use 将每一项的 pathName 和 router 都挂载在服务器上
     * @memberof App
     */
    initialRouter() {
        if (this.routes.length > 0) {
            this.routes.map((item) => {
                this.app.use(item.pathName, item.router);
            });
        }
    }
    /**
     * 运行服务器
     * 
     * 监听服务器运行的端口是否正常
     * @memberof App
     */
    start() {
        this.app.get("/", (req, res) => {
            res.end();
        });
        this.app.listen(this.port, () => {
            console.log(`listening on port ${this.port}!`);
        });
    }
}
