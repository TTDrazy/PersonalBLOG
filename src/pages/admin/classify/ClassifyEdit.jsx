import React, { Component } from 'react';
import AdminLayout from "../../../components/layouts/AdminLayout";
import ClassifyForm from "../../../components/MyForm/classify/ClassifyForm";

const list = {
    classifyList: ["Web Front", "base", "CSS"],
    createTime: "2020-05-22",
    editTime: "2020-05-23",
    id: "123",
    name: "阿嘎嘎",
};
class ClassifyEdit extends Component {
    render() {
        return (
            <div>
                <AdminLayout>
                    <ClassifyForm title='修改分类' list={list}></ClassifyForm>
                </AdminLayout>
            </div>
        );
    }
}

export default ClassifyEdit;