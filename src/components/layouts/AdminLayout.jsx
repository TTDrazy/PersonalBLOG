import React, { Component } from "react";
import { Menu, Breadcrumb, Typography } from "antd";
import { FileTextTwoTone, GoldTwoTone, SmileTwoTone } from "@ant-design/icons";
import style from "./AdminLayout.module.scss";
import avatarImg from "../../assets/imgs/login/avatar.png";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;
const { Title } = Typography;

export default class AdminLayout extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <>
                <div className={style.container}>
                    <div className={style.header}>
                        <Title level={3} className={style.title}>
                            Drazy's BLOG Manage
                        </Title>
                        <img
                            alt="头像"
                            src={avatarImg}
                            className={style.avatar}
                        ></img>
                    </div>
                    <div className={style.middle}>
                        <div className={style.left}>
                            <Menu
                                theme="light"
                                defaultOpenKeys={["article", "personal"]}
                                defaultSelectedKeys={["1"]}
                                mode="inline"
                            >
                                <SubMenu
                                    key="article"
                                    icon={<FileTextTwoTone />}
                                    title="文章管理"
                                >
                                    <Menu.Item key="1">
                                        <Link to="/admin/article">
                                            浏览文章
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="2">
                                        <Link to="/admin/article/add">
                                            新增文章
                                        </Link>
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="classify"
                                    icon={<GoldTwoTone />}
                                    title="分类管理"
                                >
                                    <Menu.Item key="3">
                                        <Link to="/admin/classify">
                                            浏览分类
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="4">
                                        <Link to="/admin/classify/add">
                                            新增分类
                                        </Link>
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="personal"
                                    icon={<SmileTwoTone />}
                                    title="个人管理"
                                >
                                    <Menu.Item key="5">个人资料</Menu.Item>
                                    <Menu.Item key="6">设置</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </div>
                        <div className={style.right}>
                            <div className={style.content}>
                                <div className={style.breadTop}>
                                    {/* <Breadcrumb style={{ margin: "16px 0" }}>
                                        <Breadcrumb.Item>User</Breadcrumb.Item>
                                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                                    </Breadcrumb> */}
                                </div>
                                <div className={style.mainContent}>
                                    {this.props.children ||
                                        "生活不易，猫猫叹气"}
                                </div>
                                <div className={style.bottom}>
                                    Drazy's BLOG ©2020 Created By Drazy
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
