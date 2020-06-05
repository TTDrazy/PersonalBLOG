import App from "./App";
import ArticleRouter from "./routes/ArticleRouter";
import ClassifyRouter from "./routes/ClassifyRouter";

const app = new App({
    port: 8080,
    routes: [
        { pathName: "/article", router: ArticleRouter },
        { pathName: "/classify", router: ClassifyRouter },
    ],
});

app.start();
