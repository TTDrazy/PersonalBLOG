import React, { Component } from "react";
import { Typography, Form, Input, Button, Checkbox, message } from "antd";
import hellogImg from "../assets/imgs/login/hello.jpg";
import avatarImg from "../assets/imgs/login/avatar.png";
import style from "./Login.module.scss";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { withRouter } from "react-router";
const { Title } = Typography;

class Login extends Component {
    state = {
        userName: "",
        password: "",
        isAdmin: false,
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    checkInfo() {
        const { userName, password } = this.state;
        if (!userName) {
            message.warning("用户名不能为空!");
        } else if (!password) {
            message.warning("密码不能为空!");
        } else if (userName === "Drazy" && password === "111") {
            message.success("登陆成功!即将跳转至后台管理页~");
            this.setState({
                isAdmin: true,
            });
        } else {
            message.warning("用户名或密码错误！");
        }
    }
    //跳转至 admin 页面
    toAdmin = () => {
        this.checkInfo();
        if (this.state.isAdmin) {
            this.props.history.push("/admin");
        }
    };
    onFinish = (values) => {
        console.log("Success:", values);
    };

    onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    render() {
        const { userName, password } = this.state;
        return (
            <>
                <div className={style.container}>
                    <div className={style.top}>
                        <Title className={style.title}>
                            Wlcome to Drazy's BLOG
                        </Title>
                    </div>
                    <div className={style.middle}>
                        <div className={style.left}>
                            <div className={style.hello}>
                                <img alt="欢迎你呀" src={hellogImg}></img>
                            </div>
                        </div>
                        <div className={style.right}>
                            <div className={style.inputBox}>
                                <img
                                    className={style.avatar}
                                    alt="头像"
                                    src={avatarImg}
                                ></img>
                                <div className={style.formBox}>
                                    <Form
                                        className={style.form}
                                        name="basic"
                                        initialValues={{
                                            remember: true,
                                        }}
                                        onFinish={this.onFinish}
                                        onFinishFailed={this.onFinishFailed}
                                    >
                                        <Form.Item
                                            name="userName"
                                            className={style.input}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "请输入用户名！",
                                                },
                                            ]}
                                        >
                                            <Input
                                                name="userName"
                                                value={userName}
                                                onChange={(e) =>
                                                    this.handleChange(e)
                                                }
                                                placeholder="用户名"
                                                prefix={<UserOutlined />}
                                            />
                                            <span></span>
                                        </Form.Item>

                                        <Form.Item
                                            name="password"
                                            className={style.input}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "请输入密码！",
                                                },
                                            ]}
                                        >
                                            <Input.Password
                                                name="password"
                                                value={password}
                                                onChange={(e) =>
                                                    this.handleChange(e)
                                                }
                                                placeholder="密码"
                                                prefix={<LockOutlined />}
                                            />
                                            <span></span>
                                        </Form.Item>

                                        <Form.Item
                                            className={style.checkboxBox}
                                            name="remember"
                                            valuePropName="checked"
                                        >
                                            <Checkbox
                                                className={style.checkbox}
                                            >
                                                记住密码
                                            </Checkbox>
                                        </Form.Item>
                                        <Form.Item className={style.buttonBox}>
                                            <Button
                                                type="primary"
                                                className={style.login}
                                                onClick={() => this.toAdmin()}
                                            >
                                                登录
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default withRouter(Login);
