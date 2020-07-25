import React, { Component } from "react";
import { Input, Menu } from "antd";
import BannerImg from "../../assets/imgs/home/Banner.png";
import style from "./HomeLayout.module.scss";

const { Search } = Input;

class HomeLayout extends Component {
    callback(key) {
        console.log(key);
    }
    state = {
        current: "home",
    };

    handleClick = (e) => {
        console.log("click ", e);
        this.setState({ current: e.key });
    };
    render() {
        const { current } = this.state;
        return (
            <div className={style.container}>
                <div className={style.topBar}>
                    <span className={style.topHome}>Home</span>
                    <span className={style.topAbout}>关于我</span>
                </div>
                <hr></hr>
                <div className={style.banner}>
                    <img src={BannerImg} className={style.bannerImg}></img>
                </div>
                <div className={style.topNav}>
                    <Menu
                        style={{background:'#74c9aa',color: '#fff',fontSize:'18px'}}
                        className={style.topNavLeft}
                        onClick={this.handleClick}
                        selectedKeys={[current]}
                        mode="horizontal"
                    >
                        <Menu.Item key="home">首页</Menu.Item>
                        <Menu.Item key="codeShare">技术分享</Menu.Item>
                        <Menu.Item key="happyWriting">心情随笔</Menu.Item>
                        <Menu.Item key="aboutMe">关于我</Menu.Item>
                    </Menu>
                    <Search
                        className={style.topNavRight}
                        placeholder="搜索文章"
                        onSearch={(value) => console.log(value)}
                    />
                </div>
                <div className={style.content}>{this.props.children}</div>
            </div>
        );
    }
}

export default HomeLayout;
