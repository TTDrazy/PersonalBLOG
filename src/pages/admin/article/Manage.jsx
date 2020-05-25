import React, { Component } from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AdminLayout from "../../../components/layouts/AdminLayout";
import ArticleTable from "../../../components/MyTable/article/ArticleTable";
import ArticleSearch from "../../../components/MyInput/article/ArticleSearch";
import ArticleSelect from "../../../components/MyInput/article/ArticleSelect";
import style from "./Manage.module.scss";
import { Link } from "react-router-dom";

const list = [
    {
        id: 1,
        name: "John",
        classifyName: "css",
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 2,
        name: "Jim",
        classifyName: "html",
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 3,
        name: "Joe",
        classifyName: "vue",
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 4,
        name: "John",
        classifyName: "js",
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 5,
        name: "Jim",
        classifyName: "html",
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 6,
        name: "Joe",
        classifyName: "vue",
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 7,
        name: "John",
        classifyName: "css",
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 8,
        name: "Jim",
        classifyName: "html",
        createTime: 1559536167,
        editTime: 1590116944,
    },
    {
        id: 9,
        name: "Joe",
        classifyName: "react",
        createTime: 1559536167,
        editTime: 1590116944,
    },
];
class Manage extends Component {
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
                    <div className={style.container}>
                        <div className={style.InputBox}>
                            <div className={style.select}>
                                <ArticleSelect placeholder="按类别检索文章"></ArticleSelect>
                            </div>
                            <div className={style.search}>
                                <ArticleSearch placeholder="按名称查找文章"></ArticleSearch>
                            </div>
                        </div>
                        <div className={style.tableBox}>
                            <div className={style.tableTitle}>
                                <div className={style.title}>查询表格</div>
                                <Button type="primary">
                                    <Link to="/admin/article/add">
                                        <PlusOutlined />
                                        新增文章
                                    </Link>
                                </Button>
                            </div>

                            <ArticleTable
                                tableList={list}
                                everyPageShowInfo={6}
                            ></ArticleTable>
                        </div>
                    </div>
                </AdminLayout>
            </div>
        );
    }
}

export default Manage;
