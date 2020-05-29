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

    onFinish = (values) => {
        const { userName, password } = this.state;
        if (userName === "Drazy" && password === "111") {
            this.setState({
                isAdmin: true,
            });
            if (values.remember) {
                localStorage.setItem("userName", userName);
                localStorage.setItem("password", password);
            }
            message.success("登陆成功!即将跳转至后台管理页~");
            //跳转至 admin 页面
            this.props.history.push("/admin/article");
        } else {
            message.warning("用户名或密码错误！");
        }
    };

    onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    render() {
        const { userName, password, checked } = this.state;
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
                                        initialValues={{ remember: true }}
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
                                        </Form.Item>

                                        {/* Form.Item 里的 checkBox 不能通过常规赋值 checked 属性 */}
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
                                                htmlType="submit"
                                                type="primary"
                                                className={style.login}
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
