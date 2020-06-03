import express from "express";
import ArticleService from "../services/ArticleService";
import ArticleVO from "../models/vo/ArticleVO";
import ArticleDTO from "../models/dto/ArticleDTO";
let router = express.Router();

router.get("/", async (req, res) => {
    let data = await ArticleService.getAll();
    let result = [];
    data.map((item) => {
        let itemModel = new ArticleVO(item);
        result.push(itemModel);
    });
    res.send(result);
});

router.get("/:id", async (req, res) => {
    //从 url -> params 中取 id
    const id = req.params.id;
    let data = await ArticleService.getArticleById(id);
    let result = new ArticleVO(data[0]);
    res.send(result);
});
router.post("/", async (req, res) => {
    const articleData = new ArticleDTO(req.body);
    console.log(articleData)
    let data = await ArticleService.addArticle(articleData);
    res.send(data);
});

//router.put()

router.delete("/:id", async (req, res) => {
    //从 url -> params 中取 id
    const id = req.params.id;
    let data = await ArticleService.removeArticle(id);
    let result = new ArticleVO(data[0]);
    res.send(result);
});
export default router;
