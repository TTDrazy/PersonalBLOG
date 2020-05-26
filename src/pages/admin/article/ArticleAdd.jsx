import React, { Component } from "react";
import AdminLayout from "../../../components/layouts/AdminLayout";
import ArticleForm from "../../../components/MyForm/article/ArticleForm";

export default class ArticleAdd extends Component {
    render() {
        return (
            <>
                <AdminLayout>
                    <ArticleForm></ArticleForm>
                </AdminLayout>
            </>
        );
    }
}
