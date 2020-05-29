import React, { Component } from "react";
import Manage from "../../../components/Manage/Manage";

const tableList = [
    {
        id: 1,
        name: "John",
        classifyName: "css",
        isShow: true,
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 2,
        name: "Jim",
        classifyName: "html",
        isShow: false,
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 3,
        name: "Joe",
        classifyName: "vue",
        isShow: true,
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 4,
        name: "John",
        classifyName: "js",
        isShow: true,
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 5,
        name: "Jim",
        classifyName: "html",
        isShow: true,
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 6,
        name: "Joe",
        classifyName: "vue",
        isShow: false,
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 7,
        name: "John",
        classifyName: "css",
        isShow: false,
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 8,
        name: "Jim",
        classifyName: "html",
        isShow: true,
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 9,
        name: "Joe",
        classifyName: "react",
        isShow: true,
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 10,
        name: "Joe",
        classifyName: "vue",
        isShow: false,
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 11,
        name: "John",
        classifyName: "css",
        isShow: true,
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 12,
        name: "Jim",
        classifyName: "html",
        isShow: true,
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 13,
        name: "Joe",
        classifyName: "react",
        isShow: false,
        createTime: 1559536167,
        editTime: 1590116944,
    },
];
class ArticleManage extends Component {
    render() {
        return <Manage tableList={tableList}></Manage>;
    }
}

export default ArticleManage;
