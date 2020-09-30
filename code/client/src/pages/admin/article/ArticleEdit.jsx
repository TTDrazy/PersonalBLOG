import React, { Component } from "react";
import AdminLayout from "../../../components/layouts/AdminLayout";
import MyForm from "../../../components/MyForm/MyForm";
import ArticleApi from "../../../api/article/ArticleApi";
import { message as Message } from "antd";
import { withRouter } from "react-router";

class ArticleEdit extends Component {
    state = {
        //拿到路由传过来的参数 id
        id: null,
        name: "",
        classifyId: null,
        mdTextarea: "",
        mdContent: "",
        isShow: true,
        createTime: "",
        editTime: "",
    };
    componentDidMount() {
        if (!this.props.location.query) {
            Message.warning("未获取到该条文章信息，请重新进行修改操作！");
            this.props.history.push("/admin/article");
        } else {
            let id = this.props.location.query.id;
            this.setState({
                id:id,
            });
            new ArticleApi().getById(id).then((resolve, reject) => {
                let { status, message, data } = resolve.data;
                let {
                    name,
                    classifyId,
                    mdTextarea,
                    mdContent,
                    isShow,
                    createTime,
                    editTime,
                } = data[0];
                if (status === 100) {
                    this.setState({
                        name,
                        classifyId,
                        mdTextarea,
                        mdContent,
                        isShow,
                        createTime,
                        editTime,
                    });
                } else {
                    Message.warning(message);
                }
            });
        }
    }
    render() {
        return !!this.state.classifyId ? (
            <>
                <AdminLayout>
                    <MyForm list={this.state}></MyForm>
                </AdminLayout>
            </>
        ) : (
            ""
        );
    }
}
export default withRouter(ArticleEdit);
