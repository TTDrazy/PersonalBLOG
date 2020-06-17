import React, { Component } from "react";
import style from "./MyForm.module.scss";
import { Input, Button, Radio, message } from "antd";
import MySelect from "../MyInput/MySelect";
import { Link, withRouter } from "react-router-dom";
import MyMarkdown from "../MyMarkdown/MyMarkdown";

class MyForm extends Component {
    state = {
        isClassify: this.props.isClassify,
        id: 0,
        name: "",
        classifyList: [],
        content: "",
        createTime: "2020-05-22",
        editTime: "2020-05-23",
        isShow: true,
        mdTextarea: "",
        mdContent: "",
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
                mdTextarea,
                mdContent,
            } = this.props.list;
            this.setState({
                id,
                name,
                classifyList,
                content,
                createTime,
                editTime,
                mdTextarea,
                mdContent,
            });
        }
    }
    /**
     * 获取 MyMarkdown 组件中的 mdTextarea 及 mdContent
     *
     * @memberof MyForm
     */
    getMd = (mdState) => {
        const { mdTextarea, mdContent } = mdState;
        this.setState({
            mdTextarea,
            mdContent,
        });
    };
    onChange = (e) => {
        console.log("isShow", e.target.value);
        this.setState({
            isShow: e.target.value,
        });
    };
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
        const { id, isClassify } = this.state;
        if (id === 0) {
            message.success(
                `您已成功${isClassify ? "增加此分类" : "上传此篇文章"}！`
            );
        } else {
            message.success(
                `您已成功修改此${isClassify ? "分类" : "篇文章"}！`
            );
        }
        // 跳转路由
        this.props.history.push(
            `/admin/${isClassify ? "classify" : "article"}`
        );
        console.log(this.state);
    };
    render() {
        const {
            isClassify,
            id,
            name,
            classifyList,
            createTime,
            editTime,
            isShow,
        } = this.state;
        return (
            <>
                <div className={style.container}>
                    <div className={style.formBox}>
                        {id === 0 ? (
                            <></>
                        ) : (
                            <div className={style.row}>
                                <div
                                    className={[
                                        `${style.column} ${style.label}`,
                                    ]}
                                >
                                    {isClassify ? "分类" : "文章"}编号：
                                </div>
                                <div
                                    className={[
                                        `${style.column} ${style.inputBox}`,
                                    ]}
                                >
                                    <Input
                                        name="id"
                                        value={id}
                                        onChange={(e) => this.changeInput(e)}
                                        disabled
                                    ></Input>
                                </div>
                            </div>
                        )}
                        <div className={style.row}>
                            <div className={[`${style.column} ${style.label}`]}>
                                {isClassify ? "分类" : "文章"}标题：
                            </div>
                            <div
                                className={[
                                    `${style.column} ${style.inputBox}`,
                                ]}
                            >
                                <Input
                                    name="name"
                                    value={name}
                                    onChange={(e) => this.changeInput(e)}
                                ></Input>
                            </div>
                        </div>
                        <div className={style.row}>
                            <div
                                className={[
                                    `${style["column"]} ${style["label"]}`,
                                ]}
                            >
                                {isClassify ? "" : "文章"}所属分类：
                            </div>
                            <div
                                className={[
                                    `${style.column} ${style.inputBox}`,
                                ]}
                            >
                                <MySelect
                                    selectValue={classifyList}
                                    type="select"
                                    placeholder="请选择分类"
                                    changeSelect={(list) =>
                                        this.changeSelect(list)
                                    }
                                ></MySelect>
                            </div>
                        </div>
                        {isClassify ? (
                            <></>
                        ) : (
                            <div className={style.row}>
                                <div
                                    className={[
                                        `${style["column"]} ${style["label"]}`,
                                    ]}
                                >
                                    文章内容：
                                </div>
                                <div
                                    className={[
                                        `${style.column} ${style.inputBox}`,
                                    ]}
                                >
                                    <MyMarkdown
                                        rows="15"
                                        getMd={this.getMd}
                                    ></MyMarkdown>
                                </div>
                            </div>
                        )}
                        <div className={style.row}>
                            <div
                                className={[
                                    `${style["column"]} ${style["label"]}`,
                                ]}
                            >
                                是否{isClassify ? "启用" : "展示"}：
                            </div>
                            <div
                                className={[
                                    `${style.column} ${style.inputBox}`,
                                ]}
                            >
                                <Radio.Group
                                    onChange={this.onChange}
                                    value={isShow}
                                >
                                    <Radio value={true}>
                                        {isClassify ? "启用" : "展示"}
                                    </Radio>
                                    <Radio value={false}>
                                        非{isClassify ? "启用" : "展示"}
                                    </Radio>
                                </Radio.Group>
                            </div>
                        </div>

                        {id === 0 ? (
                            <></>
                        ) : (
                            <div className={style.row}>
                                <div className={style.column}></div>
                                <div
                                    className={[
                                        `${style.column} ${style.date}`,
                                    ]}
                                >
                                    <div>创建时间：{createTime}</div>
                                </div>
                            </div>
                        )}
                        <div className={style.row}>
                            <div className={style.column}></div>
                            <div className={[`${style.column} ${style.date}`]}>
                                <div>修改时间：{editTime}</div>
                            </div>
                        </div>

                        <div className={style.row}>
                            <div className={style.column}></div>
                            <div className={style.column}>
                                <Button
                                    className={style.myButton}
                                    type="primary"
                                    onClick={() => this.submit()}
                                >
                                    提交
                                </Button>
                                <Link
                                    to={`/admin/${
                                        isClassify ? "classify" : "article"
                                    }`}
                                >
                                    <Button className={style.myButton}>
                                        取消
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default withRouter(MyForm);
