import express from "express";
import ArticleService from "../services/ArticleService";
import ArticleVO from "../models/vo/ArticleVO";
import AddDTO from "../models/dto/article/AddDTO";
import EditDTO from "../models/dto/article/EditDTO";
import Result from "../models/result/Result";
let router = express.Router();

router.get("/", async (req, res) => {
    let data = await new ArticleService().getAll();
    let list = [];
    data.map((item) => {
        console.log(item);
        let itemModel = new ArticleVO(item);
        list.push(itemModel);
    });
    let result = new Result(list);
    res.send(result);
});

router.get("/:id", async (req, res) => {
    //从 url -> params 中取 id
    const id = req.params.id;
    let data = await new ArticleService().getArticleById(id);
    let list;
    if (!!data.id) {
        list = new ArticleVO(data[0]);
    } else {
        list = data;
    }
    let result = new Result(list);
    res.send(result);
});
router.post("/", async (req, res) => {
    // 利用 body-parser 从 req.body 中取数据
    const articleData = new AddDTO(req.body);
    let data = await new ArticleService().addArticle(articleData);
    let result = new Result(data);
    res.send(result);
});

router.put("/", async (req, res) => {
    // 利用 body-parser 从 req.body 中取数据
    const articleData = new EditDTO(req.body);
    let data = await new ArticleService().editArticle(articleData);
    let result = new Result(data);
    res.send(result);
});

router.delete("/:id", async (req, res) => {
    //从 url -> params 中取 id
    const id = req.params.id;
    let data = await new ArticleService().removeArticle(id);
    let list;
    if (!!data.id) {
        list = new ArticleVO(data[0]);
    } else {
        list = data;
    }
    let result = new Result(list);
    res.send(result);
});

export default router;
