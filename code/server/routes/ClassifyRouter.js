import express from "express";
import ClassifyService from "../services/ClassifyService";
import ClassifyVO from "../models/vo/ClassifyVO";
import Result from "../models/result/Result";
let router = express.Router();

router.get("/", async (req, res) => {
    let data = await new ClassifyService().getAll();
    console.log(data);
    // let list = [];
    // data.map((item) => {
    //     let itemModel = new ClassifyVO(item);
    //     list.push(itemModel);
    // });
    // let result = new Result(list);
    //res.send(result);
});

export default router;
