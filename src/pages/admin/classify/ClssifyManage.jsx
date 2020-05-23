import React, { Component } from "react";
import AdminLayout from "../../../components/layouts/AdminLayout";
import ClassifyTable from "../../../components/MyTable/classify/ClassifyTable";
const list = [
    {
        id: 1,
        name: "John",
        classifyList: ["css", "js"],
        isOpen: true,
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 2,
        name: "Jim",
        classifyList: ["html"],
        isOpen: true,
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 3,
        name: "Joe",
        classifyList: ["vue", "react"],
        isOpen: false,
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 4,
        name: "John",
        classifyList: ["css", "js"],
        isOpen: true,
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 5,
        name: "Jim",
        classifyList: ["html"],
        isOpen: true,
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 6,
        name: "Joe",
        classifyList: ["vue", "react"],
        isOpen: false,
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 7,
        name: "John",
        classifyList: ["css", "js"],
        isOpen: true,
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 8,
        name: "Jim",
        classifyList: ["html"],
        isOpen: true,
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 9,
        name: "Joe",
        classifyList: ["vue", "react"],
        isOpen: false,
        createTime: 1559536167,
        editTime: 1590116944,
    },
];
class ClssifyManage extends Component {
    //将时间转为时间戳
    getLocalTime(time) {
        return new Date(parseInt(time) * 1000)
            .toLocaleString()
            .replace(/:\d{1,2}$/, " ");
    }
    render() {
        list.map((item) => {
            item.createTime = this.getLocalTime(item.createTime);
            item.editTime = this.getLocalTime(item.editTime);
        });
        return (
            <div>
                <AdminLayout>
                    <ClassifyTable
                        tableList={list}
                        everyPageShowInfo={6}
                    ></ClassifyTable>
                </AdminLayout>
            </div>
        );
    }
}

export default ClssifyManage;
