import express from "express";
import ClassifyService from "../services/ClassifyService";
import ClassifyVO from "../models/vo/ClassifyVO";
import Result from "../models/result/Result";
import AddDTO from "../models/dto/classify/AddDTO";
import EditDTO from "../models/dto/classify/EditDTO";
let router = express.Router();

router.get("/", async (req, res) => {
    let allData = await new ClassifyService().getAll();
    let data =await new ClassifyService().getClassifyList(allData);
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
    let allData = await new ClassifyService().getAll();
    let data = await new ClassifyService().getClassifyList(allData);
    let dataList = data.filter((item) => item.id == id);
    let list = [];
    if (!!dataList[0] && !!dataList[0].id) {
        list.push(new ClassifyVO(dataList[0]));
    } else {
        list = dataList;
    }
    let result = new Result(list);
    res.send(result);
});
router.post("/", async (req, res) => {
    // 利用 body-parser 从 req.body 中取数据
    const classifyData = new AddDTO(req.body);
    let data = await new ClassifyService().addClassify(classifyData);
    let result = new Result(data);
    res.send(result);
});
router.put("/", async (req, res) => {
    // 利用 body-parser 从 req.body 中取数据
    let data;
    if (!!req.body && !!req.body.id) {
        const classifyData = new EditDTO(req.body);
        data = await new ClassifyService().editClassify(classifyData);
    } else {
        data = [];
    }
    let result = new Result(data);
    res.send(result);
});
router.delete("/:id", async (req, res) => {
    //从 url -> params 中取 id
    const id = req.params.id;
    let data = await new ClassifyService().removeClassify(id);
    let list = [];
    if (!!data.id) {
        list.push(new ClassifyVO(data[0]));
    } else {
        list = data;
    }
    let result = new Result(list);
    res.send(result);
});

export default router;
