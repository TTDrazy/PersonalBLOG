import React, { Component } from "react";
import style from "./MyForm.module.scss";
import { Input, Button, Radio, message as Message } from "antd";
import MySelect from "../MyInput/MySelect";
import { Link, withRouter } from "react-router-dom";
import MyMarkdown from "../MyMarkdown/MyMarkdown";
import ClassifyAPI from "../../api/ClassifyAPI";
import ArticleAPI from "../../api/ArticleAPI";

class MyForm extends Component {
    state = {
        isClassify: this.props.isClassify,
        id: 0,
        name: "",
        classifyId: null,
        classifyList: [],
        createTime: "",
        editTime: "",
        isShow: true,
        mdTextarea: "",
        mdContent: "",
    };
    componentDidMount() {
        if (!!this.props.list) {
            const {
                id,
                name,
                classifyId,
                createTime,
                editTime,
                mdTextarea,
                mdContent,
                isShow,
            } = this.props.list;
            this.setState(
                {
                    id,
                    name,
                    classifyId,
                    createTime,
                    editTime,
                    mdTextarea,
                    mdContent,
                    isShow,
                },
                () => {
                    new ClassifyAPI()
                        .getById(this.state.classifyId)
                        .then((resolve, reject) => {
                            let { status, message, data } = resolve.data;
                            let { classifyList } = data[0];
                            if (status === 100) {
                                this.setState({
                                    classifyList,
                                });
                            } else {
                                Message.warning(message);
                            }
                        });
                }
            );
        }
    }
    /**
     *将时间戳转换成正常时间格式
     *
     * @param {*} timestamp - 13 位时间戳
     * @returns
     * @memberof MyForm
     */
    timestampToTime(timestamp) {
        var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + "-";
        var M =
            (date.getMonth() + 1 < 10
                ? "0" + (date.getMonth() + 1)
                : date.getMonth() + 1) + "-";
        var D = date.getDate() + " ";
        var h = date.getHours() + ":";
        var m = date.getMinutes() + ":";
        var s = date.getSeconds();
        return Y + M + D + h + m + s;
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
        this.setState({
            classifyList: list,
            classifyId:list[list.length-1]
        });
        console.log(list)
    };
    submit = () => {
        const { id, isClassify, classifyList } = this.state;
        this.setState({
            classifyId: classifyList[classifyList.length - 1],
        });
        if (id === 0) {
            console.log(this.state);
            // new ArticleAPI().addArticle(this.state).then((resolve, reject) => {
            //     let { status, message, data } = resolve.data;
            //     if (status === 100) {
            //         Message.success(
            //             `您已成功${
            //                 isClassify ? "增加此分类" : "上传此篇文章"
            //             }！`
            //         );
            //     } else {
            //         Message.warning(message);
            //     }
            // });
        } else {
            new ArticleAPI().editArticle(this.state).then((resolve, reject) => {
                let { status, message, data } = resolve.data;
                if (status === 100) {
                    Message.success(
                        `您已成功修改此${isClassify ? "分类" : "篇文章"}！`
                    );
                } else {
                    Message.warning(message);
                }
            });
        }

        //跳转路由
        // this.props.history.push(
        //     `/admin/${isClassify ? "classify" : "article"}`
        // );
    };
    render() {
        const {
            isClassify,
            id,
            name,
            createTime,
            editTime,
            mdTextarea,
            mdContent,
            isShow,
            classifyList,
        } = this.state;
        console.log(this.state)
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
                                    <span>{id}</span>
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
                                {classifyList.length !== 0 ? (
                                    <MySelect
                                        selectValue={classifyList}
                                        type="select"
                                        placeholder="请选择分类"
                                        changeSelect={(list) =>
                                            this.changeSelect(list)
                                        }
                                    ></MySelect>
                                ) : (
                                    ''
                                    // <MySelect
                                    //     type="select"
                                    //     placeholder="请选择分类"
                                    //     changeSelect={(list) =>
                                    //         this.changeSelect(list)
                                    //     }
                                    // ></MySelect>
                                )}
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
                                    {!!mdTextarea ? (
                                        <MyMarkdown
                                            rows="15"
                                            getMd={this.getMd}
                                            mdTextarea={mdTextarea}
                                            mdContent={mdContent}
                                        ></MyMarkdown>
                                    ) : (
                                        ''
                                        // <MyMarkdown
                                        //     rows="15"
                                        //     getMd={this.getMd}
                                        // ></MyMarkdown>
                                    )}
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
                                    <div>
                                        创建时间：
                                        {this.timestampToTime(createTime)}
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className={style.row}>
                            <div className={style.column}></div>
                            <div className={[`${style.column} ${style.date}`]}>
                                {editTime ? (
                                    <div>
                                        修改时间：
                                        {this.timestampToTime(editTime)}
                                    </div>
                                ) : (
                                    ""
                                )}
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
