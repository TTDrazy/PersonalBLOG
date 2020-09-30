import React, { Component } from "react";
import { Input, Cascader, Button, message as Message} from "antd";
import ClassifyApi from "../../api/classify/ClassifyApi";

export default class MySelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classifyTree:[],
            searchInfo: '',
            searchedId:''
        };
    }
    onChange = (value) => {
        this.setState({
            searchInfo: value,
            //将最后选中的 classify-Id 放入 searchedId 中
            searchedId:value[value.length - 1]
        });
        //console.log(this.state.searchInfo);
        this.props.changeSelect &&
            this.props.changeSelect(this.state.searchInfo);
    };

    componentDidMount() {
        new ClassifyApi().getTree().then((resolve, reject) => {
            let { status, message, data } = resolve.data;
            if (status === 100) {
                this.setState({
                    classifyTree: data,
                });
            } else {
                Message.warning(message);
            }
        });
        this.setState({
            searchInfo: this.props.selectValue,
        });
    }
    render() {
        const { type, isClassify, placeholder,selectValue } = this.props;
        const { searchInfo } = this.state;
        // console.log(searchInfo);
        //console.log({selectValue });
        return (
            <>
                <Input.Group compact>
                    <div style={{ display: "flex" }}>
                        <Cascader
                            defaultValue={selectValue ? selectValue : []}
                            //自定义字段名
                            fieldNames={{
                                label: "name",
                                value: "id",
                                children: "children",
                            }}
                            //可以选中任意一项
                            changeOnSelect
                            style={{ width: "100%" }}
                            value={searchInfo}
                            options={this.state.classifyTree}
                            placeholder={
                                placeholder
                                    ? placeholder
                                    : `按类别检索${
                                          isClassify ? "分类" : "文章"
                                      }`
                            }
                            expandTrigger="hover"
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
