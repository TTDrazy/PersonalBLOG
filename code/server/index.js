import App from "./App";
import ArticleRouter from "./routes/ArticleRouter";

const app = new App({
    port: 8080,
    routes: [{ pathName: "/article", router:ArticleRouter },],
});

app.start();
