import React, { Component } from "react";
import AdminLayout from "../../../components/layouts/AdminLayout";
import MyForm from "../../../components/MyForm/MyForm";

class ClassifyAdd extends Component {
    render() {
        return (
            <div>
                <AdminLayout>
                    <MyForm isClassify={true}></MyForm>
                </AdminLayout>
            </div>
        );
    }
}

export default ClassifyAdd;
