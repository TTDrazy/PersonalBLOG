import express from "express";
import ArticleService from "../services/ArticleService";
import ArticleModule from "../models/ArticleModule";
let router = express.Router();

router.get("/", async (req, res) => {
    let data = await ArticleService.getAll();
    let result = [];
    data.map((item) => {
        let itemModel = new ArticleModule(item);
        result.push(itemModel);
    });
    res.send(result);
});
