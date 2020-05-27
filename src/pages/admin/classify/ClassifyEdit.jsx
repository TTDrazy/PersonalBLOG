import React, { Component } from "react";
import AdminLayout from "../../../components/layouts/AdminLayout";
import MyForm from "../../../components/MyForm/MyForm";

class ClassifyEdit extends Component {
    state = {
        classifyList: ["Web Front", "base", "CSS"],
        createTime: "2020-05-22",
        editTime: "2020-05-23",
        //拿到路由传过来的参数 id
        id: this.props.location.query.id,
        name: "阿嘎嘎",
    };
    render() {
        return (
            <div>
                <AdminLayout>
                    <MyForm isClassify={true} list={this.state}></MyForm>
                </AdminLayout>
            </div>
        );
    }
}

export default ClassifyEdit;
