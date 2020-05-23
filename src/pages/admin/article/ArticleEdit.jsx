import React, { Component } from "react";
import AdminLayout from "../../../components/layouts/AdminLayout";
import ArticleForm from "../../../components/MyForm/article/ArticleForm";
const list = {
    classifyList: ["Web Front", "base", "CSS"],
    content: "我是内容按施工队",
    createTime: "2020-05-22",
    editTime: "2020-05-23",
    id: "123",
    name: "阿嘎嘎",
};
export default class ArticleEdit extends Component {
    render() {
        return (
            <>
                <AdminLayout>
                    <ArticleForm title="修改文章" list={list}></ArticleForm>
                </AdminLayout>
            </>
        );
    }
}
