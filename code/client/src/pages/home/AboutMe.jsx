import React, { Component } from "react";
import HomeLayout from "../../components/layouts/HomeLayout";
import { Pagination } from "antd";
import style from "./CodeShare.module.scss";
import MyCard from "../../components/MyCard/MyCard";
import MyRightBox from "../../components/MyRightBox/MyRightBox";
import { Link } from "react-router-dom";

class AboutMe extends Component {
    onChange(pageNumber) {
        console.log("Page: ", pageNumber);
    }
    render() {
        return (
            <HomeLayout>
                <div className={style.content}>
                    <div className={style.contentLeft}>
                        <div className={style.articlesTitle}>
                            <div className={style.title}>关于我</div>
                            <div className={style.articleRightTitle}>
                                <Link to="/">回到首页 &gt;&gt;</Link>
                            </div>
                        </div>
                        <div className={style.articles}>
                            <MyCard></MyCard>
                            <MyCard></MyCard>
                            <MyCard></MyCard>
                            <MyCard></MyCard>
                            <MyCard></MyCard>
                        </div>
                    </div>
                    <div className={style.contentRight}>
                        <MyRightBox></MyRightBox>
                    </div>
                </div>
            </HomeLayout>
        );
    }
}

export default AboutMe;
