import React, { Component } from "react";
import { Typography, Form, Input, Button, Checkbox } from "antd";
import hellogImg from "../assets/imgs/login/hello.jpg";
import avatarImg from "../assets/imgs/login/avatar.png";
import style from "./Login.module.scss";
const { Title } = Typography;

export default class Login extends Component {
    render() {
        const onFinish = (values) => {
            console.log("Success:", values);
        };

        const onFinishFailed = (errorInfo) => {
            console.log("Failed:", errorInfo);
        };

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
                                        name="basic"
                                        initialValues={{
                                            remember: true,
                                        }}
                                        onFinish={onFinish}
                                        onFinishFailed={onFinishFailed}
                                    >
                                        <Form.Item
                                            label="用户名："
                                            name="username"
                                        >
                                            <Input />
                                        </Form.Item>

                                        <Form.Item
                                            label="密码："
                                            name="password"
                                        >
                                            <Input.Password />
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
