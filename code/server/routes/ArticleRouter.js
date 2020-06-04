import express from "express";
import ArticleService from "../services/ArticleService";
import ArticleVO from "../models/vo/ArticleVO";
import AddDTO from "../models/dto/article/AddDTO";
import EditDTO from "../models/dto/article/EditDTO";
let router = express.Router();

router.get("/", async (req, res) => {
    let data = await ArticleService.getAll();
    let result = [];
    data.map((item) => {
        console.log(item);
        let itemModel = new ArticleVO(item);
        result.push(itemModel);
    });
    res.send(result);
});

router.get("/:id", async (req, res) => {
    //从 url -> params 中取 id
    const id = req.params.id;
    let data = await ArticleService.getArticleById(id);
    let result;
    if (!!data.id) {
        result = new ArticleVO(data[0]);
    } else {
        result = data;
    }
    res.send(result);
});
router.post("/", async (req, res) => {
    // 利用 body-parser 从 req.body 中取数据
    const articleData = new AddDTO(req.body);
    let data = await ArticleService.addArticle(articleData);
    res.send(data);
});

router.put("/", async (req, res) => {
    // 利用 body-parser 从 req.body 中取数据
    const articleData = new EditDTO(req.body);
    let data = await ArticleService.editArticle(articleData);
    res.send(data);
});

router.delete("/:id", async (req, res) => {
    //从 url -> params 中取 id
    const id = req.params.id;
    let data = await ArticleService.removeArticle(id);
    let result;
    if (!!data.id) {
        result = new ArticleVO(data[0]);
    } else {
        result = data;
    }
    res.send(result);
});
export default router;
