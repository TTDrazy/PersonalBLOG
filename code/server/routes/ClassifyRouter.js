import express from "express";
import ClassifyService from "../services/ClassifyService";
import ClassifyVO from "../models/vo/ClassifyVO";
import Result from "../models/result/Result";
let router = express.Router();

router.get("/", async (req, res) => {
    let allData = await new ClassifyService().getAll();
    let data = await new ClassifyService().getClassifyList(allData);
    console.log(data);
    let list = [];
    data.map((item) => {
        let itemModel = new ClassifyVO(item);
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
    if (!!data[0] && !!data[0].id) {
        list = new ClassifyVO(data[0]);
    } else {
        list = data;
    }
    let result = new Result(list);
    res.send(result);
});

export default router;
