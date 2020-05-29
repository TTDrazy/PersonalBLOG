import React, { Component } from "react";
import Manage from "../../../components/Manage/Manage";
const tableList = [
    {
        id: 1,
        name: "John",
        classifyList: ["css", "js"],
        isShow: true,
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 2,
        name: "Jim",
        classifyList: ["html"],
        isShow: true,
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 3,
        name: "Joe",
        classifyList: ["vue", "react"],
        isShow: false,
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 4,
        name: "John",
        classifyList: ["css", "js"],
        isShow: true,
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 5,
        name: "Jim",
        classifyList: ["html"],
        isShow: true,
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 6,
        name: "Joe",
        classifyList: ["vue", "react"],
        isShow: false,
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 7,
        name: "John",
        classifyList: ["css", "js"],
        isShow: true,
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 8,
        name: "Jim",
        classifyList: ["html"],
        isShow: true,
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 9,
        name: "Joe",
        classifyList: ["vue", "react"],
        isShow: false,
        createTime: 1559536167,
        editTime: 1590116944,
    },
];
class ClssifyManage extends Component {
    render() {
        return <Manage isClassify={true} tableList={tableList}></Manage>;
    }
}

export default ClssifyManage;
