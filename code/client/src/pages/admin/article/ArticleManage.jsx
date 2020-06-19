import React, { Component } from "react";
import Manage from "../../../components/Manage/Manage";
import { message as Message } from "antd";
import ArticleAPI from "../../../api/ArticleAPI";
import ClassifyAPI from "../../../api/ClassifyAPI";

class ArticleManage extends Component {
    state = {
        tableList: [],
    };
    componentDidMount() {
        //获取所有 Article 信息
        new ArticleAPI().getAll().then((resolve, reject) => {
            let { status, message, data } = resolve.data;
            if (status === 100) {
                this.setState({
                    tableList: data,
                });
            } else {
                Message.warning(message);
            }
        });
    }
    render() {
        let { tableList } = this.state;
        return tableList.length !== 0 ? (
            <Manage
                tableList={this.state.tableList}
            ></Manage>
        ) : (
            ""
        );
    }
}

export default ArticleManage;
