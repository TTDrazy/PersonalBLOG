import React, { Component } from "react";
import style from "./ArticleForm.module.scss";
import { Typography, Input, DatePicker, Button } from "antd";
import ArticleSelect from "../../MyInput/article/ArticleSelect";
import moment from "moment";

const { Title } = Typography;
const { TextArea } = Input;

const dateFormat = "YYYY-MM-DD";

export default class ArticleForm extends Component {
    state = {
        id: "1",
        name: "",
        classifyList: [],
        content: "我是内容",
        createTime: "2020-05-22",
        editTime: "2020-05-23",
    };
    componentDidMount() {
        if (!!this.props.list) {
            const {
                id,
                name,
                classifyList,
                content,
                createTime,
                editTime,
            } = this.props.list;
            this.setState({
                id,
                name,
                classifyList,
                content,
                createTime,
                editTime,
            });
        }
    }
    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    changeSelect = (list) => {
        console.log(list);
        this.setState({
            classifyList: list,
        });
    };
    submit = () => {
        alert("我提交啦！");
        console.log(this.state);
    };
    render() {
        const {
            id,
            name,
            content,
            classifyList,
            createTime,
            editTime,
        } = this.state;
        const { title } = this.props;
        return (
            <>
                <div className={style.container}>
                    <div className={style.title}>
                        <Title level={3}>{title}</Title>
                    </div>
                    <div className={style.fromBox}>
                        <div className={style.inputBox}>
                            <span>文章编号：</span>
                            <div className={style.input}>
                                <Input
                                    name="id"
                                    value={id}
                                    onChange={(e) => this.changeInput(e)}
                                    disabled
                                ></Input>
                            </div>
                        </div>
                        <div className={style.inputBox}>
                            <span>文章标题：</span>
                            <div className={style.input}>
                                <Input
                                    name="name"
                                    value={name}
                                    onChange={(e) => this.changeInput(e)}
                                ></Input>
                            </div>
                        </div>
                        <div className={style.inputBox}>
                            <span>所属分类：</span>
                            <div className={style.input}>
                                <ArticleSelect
                                    selectValue={classifyList}
                                    type="select"
                                    placeholder="请选择分类"
                                    changeSelect={(list) =>
                                        this.changeSelect(list)
                                    }
                                ></ArticleSelect>
                            </div>
                        </div>
                        <div className={style.inputBox}>
                            <span>文章内容：</span>
                            <div className={style.input}>
                                <TextArea
                                    rows={6}
                                    name="content"
                                    value={content}
                                    onChange={(e) => this.changeInput(e)}
                                />
                            </div>
                        </div>
                        <div className={style.date}>
                            <div className={style.dateBox}>
                                <span>创建时间：</span>
                                <div className={style.dateInput}>
                                    <DatePicker
                                        defaultValue={moment(
                                            createTime,
                                            dateFormat
                                        )}
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className={style.dateBox}>
                                <span>当前时间：</span>
                                <div className={style.dateInput}>
                                    <DatePicker
                                        defaultValue={moment(
                                            editTime,
                                            dateFormat
                                        )}
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={style.submit}>
                            <Button
                                type="primary"
                                block
                                onClick={() => this.submit()}
                            >
                                提交
                            </Button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
