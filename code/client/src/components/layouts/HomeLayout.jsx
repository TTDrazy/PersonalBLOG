import React, { Component } from "react";
import { Input, Menu, BackTop } from "antd";
import BannerImg from "../../assets/imgs/home/Banner.png";
import style from "./HomeLayout.module.scss";
import { Link,withRouter } from "react-router-dom";

const { Search } = Input;

class HomeLayout extends Component {
    toRouter = (toUrl) => {
        this.props.history.push(toUrl);
        console.log(toUrl, this.props.history.location.pathname);
    };

    render() {
        const backTopStyle = {
            height: 40,
            width: 40,
            lineHeight: "40px",
            borderRadius: 4,
            backgroundColor: "#1088e9",
            color: "#fff",
            textAlign: "center",
            fontSize: 14,
        };
        return (
            <>
                <div className={style.container}>
                    <div className={style.topBar} id="handelDocID">
                        <div>
                            <Link to="/">
                                <span className={style.topHome}>Home</span>
                            </Link>
                            <Link to="/aboutme">
                                <span className={style.topAbout}>关于我</span>
                            </Link>
                        </div>
                    </div>
                    <hr></hr>
                    <div className={style.banner}>
                        <img src={BannerImg} className={style.bannerImg}></img>
                    </div>
                    <div className={style.topNav}>
                        <div className={style.topNavBox}>
                            <Menu
                                style={{
                                    background: "#74c9aa",
                                    color: "#fff",
                                    fontSize: "18px",
                                }}
                                className={style.topNavLeft}
                                onClick={this.handleClick}
                                defaultSelectedKeys={["home"]}
                                selectedKeys={[
                                    this.props.history.location.pathname === "/"
                                        ? "/home"
                                        : this.props.history.location.pathname,
                                ]}
                                mode="horizontal"
                            >
                                <Menu.Item
                                    key="/home"
                                    onClick={() => this.toRouter("/")}
                                >
                                    首页
                                </Menu.Item>
                                <Menu.Item
                                    key="/codeshare"
                                    onClick={() => this.toRouter("/codeshare")}
                                >
                                    技术分享
                                </Menu.Item>
                                <Menu.Item
                                    key="/happywriting"
                                    onClick={() =>
                                        this.toRouter("/happywriting")
                                    }
                                >
                                    心情随笔
                                </Menu.Item>
                                <Menu.Item
                                    key="/personalfiles"
                                    onClick={() =>
                                        this.toRouter("/personalfiles")
                                    }
                                >
                                    个人归档
                                </Menu.Item>
                                <Menu.Item
                                    key="/aboutme"
                                    onClick={() => this.toRouter("/aboutme")}
                                >
                                    关于我
                                </Menu.Item>
                            </Menu>
                            <Search
                                className={style.topNavRight}
                                placeholder="搜索文章"
                                onSearch={(value) => console.log(value)}
                            />
                        </div>
                    </div>
                    <div className={style.content}>{this.props.children}</div>
                    <div className={style.bottom}>
                        <p>Copyright © 2020</p>
                        <p>Design by Drazy</p>
                    </div>
                </div>
                <BackTop>
                    <div style={backTopStyle}>UP</div>
                </BackTop>
            </>
        );
    }
}

export default withRouter(HomeLayout);
