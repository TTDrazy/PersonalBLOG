import React, { Component } from "react";
import { Input, notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";

const { Search } = Input;

const openNotification = (value) => {
    notification.open({
        message: "搜索成功！",
        description: `为您搜索到名称为${value}的文章.`,
        icon: <SmileOutlined style={{ color: "#108ee9" }} />,
    });
};
export default class ArticleSearch extends Component {
    searchArticle = (value) => {
        console.log(value);
        //成功
        openNotification(value);
    };
    render() {
        return (
            <>
                <Search
                    placeholder={this.props.placeholder}
                    onSearch={(value) => this.searchArticle(value)}
                    enterButton
                />
            </>
        );
    }
}
