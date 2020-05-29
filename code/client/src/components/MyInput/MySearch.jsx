import React, { Component } from "react";
import { Input } from "antd";

const { Search } = Input;
export default class MySearch extends Component {
    searchArticle = (value) => {
        console.log("search 成功" + value);
        //成功
    };
    render() {
        const { isClassify } = this.props;
        return (
            <>
                <Search
                    placeholder={`按名称查找${isClassify ? "分类" : "文章"}`}
                    onSearch={(value) => this.searchArticle(value)}
                    enterButton
                />
            </>
        );
    }
}
