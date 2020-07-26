import React, { Component } from "react";
import HomeLayout from "../../components/layouts/HomeLayout";
import { Pagination } from "antd";
import style from "./CodeShare.module.scss";
import MyCard from "../../components/MyCard/MyCard";
import MyRightBox from "../../components/MyRightBox/MyRightBox";
import { Link } from "react-router-dom";

class CodeShare extends Component {
    onChange(pageNumber) {
        console.log("Page: ", pageNumber);
    }
    render() {
        return (
            <HomeLayout>
                <div className={style.content}>
                    <div className={style.contentLeft}>
                        <div className={style.articlesTitle}>
                            <div className={style.title}>技术分享</div>
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
                            <MyCard></MyCard>
                            <MyCard></MyCard>
                            <MyCard></MyCard>
                            <MyCard></MyCard>
                            <MyCard></MyCard>
                            <MyCard></MyCard>
                        </div>
                        <div className={style.paginationBox}>
                            <Pagination
                                defaultPageSize={10}
                                // showQuickJumper
                                defaultCurrent={1}
                                total={35}
                                onChange={this.onChange}
                            />
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

export default CodeShare;
