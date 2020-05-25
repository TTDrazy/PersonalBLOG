import React, { Component } from "react";
import { Menu, Breadcrumb, Typography, Layout } from "antd";
import {
    FileTextTwoTone,
    GoldTwoTone,
    SmileTwoTone,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from "@ant-design/icons";
import style from "./AdminLayout.module.scss";
import avatarImg from "../../assets/imgs/login/avatar.png";
import Logo from "../../assets/imgs/logo/logo.jpg";
import { withRouter } from "react-router";

const { Title } = Typography;
const { Sider } = Layout;

class AdminLayout extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    toRouter = (toUrl) => {
        this.props.history.push(toUrl);
    };

    render() {
        return (
            <>
                <div className={style.container}>
                    <div className={style.leftBox}>
                        <div className={style.siderBox}>
                            <Sider
                                theme="dark"
                                width="250px"
                                trigger={null}
                                collapsible
                                collapsed={this.state.collapsed}
                            >
                                <div className={style.header}>
                                    <div className={style.logo}>
                                        <img alt="logo" src={Logo}></img>
                                    </div>
                                    {this.state.collapsed ? (
                                        <></>
                                    ) : (
                                        <Title
                                            level={3}
                                            className={style.title}
                                        >
                                            Drazy's BLOG
                                        </Title>
                                    )}
                                </div>
                                <Menu
                                    theme="dark"
                                    //defaultOpenKeys={["article", "personal"]}
                                    defaultSelectedKeys={["article"]}
                                    mode="inline"
                                >
                                    <Menu.Item
                                        key="article"
                                        icon={<FileTextTwoTone />}
                                        onClick={() =>
                                            this.toRouter("/admin/article")
                                        }
                                    >
                                        文章管理
                                    </Menu.Item>
                                    <Menu.Item
                                        key="classify"
                                        icon={<GoldTwoTone />}
                                        onClick={() =>
                                            this.toRouter("/admin/classify")
                                        }
                                    >
                                        分类管理
                                    </Menu.Item>
                                </Menu>
                            </Sider>
                        </div>
                    </div>
                    <div className={style.rightBox}>
                        <div className={style.rightHeader}>
                            {/* 控制 Sider 收缩按钮 */}
                            <div
                                className={
                                    ("site-layout-background",
                                    style.toggleButton)
                                }
                            >
                                {React.createElement(
                                    this.state.collapsed
                                        ? MenuUnfoldOutlined
                                        : MenuFoldOutlined,
                                    {
                                        className: "trigger",
                                        onClick: this.toggle,
                                    }
                                )}
                            </div>
                            <div className={style.avatar}>
                                <img
                                    alt="头像"
                                    src={avatarImg}
                                    className={style.avatarImage}
                                ></img>
                            </div>
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

export default withRouter(AdminLayout);
