import React, { Component } from "react";
import AdminLayout from "../../../components/layouts/AdminLayout";
import MyForm from "../../../components/MyForm/MyForm";

export default class ArticleAdd extends Component {
    render() {
        return (
            <>
                <AdminLayout>
                    <MyForm></MyForm>
                </AdminLayout>
            </>
        );
    }
}
