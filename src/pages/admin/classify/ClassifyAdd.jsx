import React, { Component } from "react";
import AdminLayout from "../../../components/layouts/AdminLayout";
import ClassifyForm from "../../../components/MyForm/classify/ClassifyForm";

class ClassifyAdd extends Component {
    render() {
        return (
            <div>
                <AdminLayout>
                    <ClassifyForm title='新增分类'></ClassifyForm>
                </AdminLayout>
            </div>
        );
    }
}

export default ClassifyAdd;
