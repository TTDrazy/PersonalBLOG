import React, { Component } from "react";
import { Input, Cascader, Button, notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";

const options = [
    {
        value: "Web Front",
        label: "Web 前端",
        children: [
            {
                value: "base",
                label: "基础",
                children: [
                    {
                        value: "HTML",
                        label: "HTML",
                    },
                    {
                        value: "CSS",
                        label: "CSS",
                    },
                    {
                        value: "JavaScript",
                        label: "JavaScript",
                    },
                ],
            },
            {
                value: "frame",
                label: "框架",
                children: [
                    {
                        value: "Vue",
                        label: "Vue",
                    },
                    {
                        value: "React",
                        label: "React",
                    },
                    {
                        value: "JQuery",
                        label: "JQuery",
                    },
                ],
            },
        ],
    },
    {
        value: "life",
        label: "生活",
        children: [
            {
                value: "inspiration",
                label: "感悟",
                children: [
                    {
                        value: "houseowrk",
                        label: "家务",
                    },
                    {
                        value: "personal",
                        label: "个人成长",
                    },
                ],
            },
        ],
    },
];
const openNotification = (value) => {
    notification.open({
        message: "搜索成功！",
        description: `将为您搜索 ${value} 该分类下的的文章.`,
        icon: <SmileOutlined style={{ color: "#108ee9" }} />,
    });
};
export default class ArticleSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInfo: [],
        };
    }
    onChange = (value) => {
        //console.log(value);
        this.setState({
            searchInfo: value,
        });
        //console.log(this.state.searchInfo);
        this.props.changeSelect &&
            this.props.changeSelect(this.state.searchInfo);
    };

    // 只显示最后的单个结果
    // displayRender = (label) => {
    //     console.log(label[label.length - 1]);
    // };

    // componentDidMount() {
    //     this.setState({
    //         searchInfo: this.props.selectValue,
    //     });
    //     console.log(this.state.searchInfo);
    // }
    selectArticle = () => {
        let arrInfo = this.state.searchInfo.join("-");
        //成功
        openNotification(arrInfo);
    };
    render() {
        const { type, placeholder } = this.props;
        const { searchInfo } = this.state;
        const { selectValue } = this.props;
        // console.log(searchInfo);
        // console.log(selectValue);
        return (
            <>
                <Input.Group compact>
                    <div style={{ display: "flex" }}>
                        <Cascader
                            defaultValue={selectValue ? selectValue : []}
                            style={{ width: "100%" }}
                            value={searchInfo}
                            options={options}
                            placeholder={placeholder}
                            expandTrigger="hover"
                            //displayRender={this.displayRender}
                            onChange={this.onChange}
                        />
                        {type === "select" ? (
                            <></>
                        ) : (
                            <Button
                                type="primary"
                                onClick={() => this.selectArticle()}
                            >
                                搜索
                            </Button>
                        )}
                    </div>
                </Input.Group>
            </>
        );
    }
}
