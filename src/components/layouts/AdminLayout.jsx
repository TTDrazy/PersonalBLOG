import React, { Component } from "react";
import { Menu, Breadcrumb, Typography } from "antd";
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from "@ant-design/icons";
import "./AdminLayout.less";
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
                <div className="container">
                    <div className="header">
                        <Title level={3} className="title">
                            Drazy's BLOG Manage
                        </Title>
                    </div>
                    <div className="middle">
                        <div className="left">
                            <Menu
                                theme="light"
                                defaultSelectedKeys={["1"]}
                                mode="inline"
                            >
                                <Menu.Item key="1" icon={<PieChartOutlined />}>
                                    Option 1
                                </Menu.Item>
                                <Menu.Item key="2" icon={<DesktopOutlined />}>
                                    Option 2
                                </Menu.Item>
                                <SubMenu
                                    key="sub1"
                                    icon={<UserOutlined />}
                                    title="User"
                                >
                                    <Menu.Item key="3">Tom</Menu.Item>
                                    <Menu.Item key="4">Bill</Menu.Item>
                                    <Menu.Item key="5">Alex</Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub2"
                                    icon={<TeamOutlined />}
                                    title="Team"
                                >
                                    <Menu.Item key="6">Team 1</Menu.Item>
                                    <Menu.Item key="8">Team 2</Menu.Item>
                                </SubMenu>
                                <Menu.Item key="9" icon={<FileOutlined />}>
                                    File
                                </Menu.Item>
                            </Menu>
                        </div>
                        <div className="right">
                            <div className="content">
                                <div className="bread-top">
                                    {/* <Breadcrumb style={{ margin: "16px 0" }}>
                                        <Breadcrumb.Item>User</Breadcrumb.Item>
                                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                                    </Breadcrumb> */}
                                </div>
                                <div className="main-content">
                                    {this.props.children ||
                                        "生活不易，猫猫叹气"}
                                </div>
                                <div className="bottom">
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
