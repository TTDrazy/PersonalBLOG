import App from "./App";
import ArticleRouter from "./routes/ArticleRouter";

const app = new App({
    path: 8080,
    routes: [{ pathName: "/article", ArticleRouter }],
});

app.start();
