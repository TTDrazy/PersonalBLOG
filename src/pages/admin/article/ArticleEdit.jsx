import React, { Component } from "react";
import AdminLayout from "../../../components/layouts/AdminLayout";
import ArticleForm from "../../../components/MyForm/article/ArticleForm";
export default class ArticleEdit extends Component {
    state = {
        classifyList: ["Web Front", "base", "CSS"],
        content: "我是内容按施工队",
        createTime: "2020-05-22",
        editTime: "2020-05-23",
        //拿到路由传过来的参数 id
        id: this.props.location.query.id,
        name: "阿嘎嘎",
    };
    render() {
        return (
            <>
                <AdminLayout>
                    <ArticleForm
                        title="修改文章"
                        list={this.state}
                    ></ArticleForm>
                </AdminLayout>
            </>
        );
    }
}
