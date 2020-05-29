import express from "express";
import ArticleService from '../services/ArticleService';
let router = express.Router();
let articleService = new ArticleService();

router.get("/", async(req, res) => {
    let data = await articleService.getAll();
});
