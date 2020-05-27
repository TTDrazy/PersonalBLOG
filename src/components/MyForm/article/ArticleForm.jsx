import React, { Component } from "react";
import style from "./ArticleForm.module.scss";
import { Typography, Input, Button } from "antd";
import MySelect from "../../MyInput/MySelect";
import { Link } from "react-router-dom";

const { Title } = Typography;
const { TextArea } = Input;

export default class ArticleForm extends Component {
    state = {
        id: 0,
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
                    <div className={style.formBox}>
                        {id === 0 ? (
                            <></>
                        ) : (
                            <div className={style.row}>
                                <div className={[style.column, style.label]}>
                                    文章编号：
                                </div>
                                <div className={style.column}>
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
                            <div className={[style.column, style.label]}>
                                文章标题：
                            </div>
                            <div className={style.column}>
                                <Input
                                    name="name"
                                    value={name}
                                    onChange={(e) => this.changeInput(e)}
                                ></Input>
                            </div>
                        </div>
                        <div className={style.row}>
                            <div className={[style.column, style.label]}>
                                文章所属分类：
                            </div>
                            <div className={style.column}>
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
                        <div className={style.row}>
                            <div className={[style.column, style.label]}>
                                文章内容：
                            </div>
                            <div className={style.column}>
                                <TextArea
                                    rows={6}
                                    name="content"
                                    value={content}
                                    onChange={(e) => this.changeInput(e)}
                                />
                            </div>
                        </div>

                        {id === 0 ? (
                            <></>
                        ) : (
                            <div className={style.row}>
                                <div className={style.column}></div>
                                <div className={[style.column, style.label]}>
                                    <div>
                                        创建时间：{createTime}
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className={style.row}>
                            <div className={style.column}></div>
                            <div className={[style.column, style.label]}>
                                <div>
                                    修改时间：{editTime}
                                </div>
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
                                <Link to={`/admin/article`}>
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
