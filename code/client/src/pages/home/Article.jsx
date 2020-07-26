import React, { Component } from "react";
import MyArticle from "../../components/MyArticle/MyArticle";
import HomeLayout from "../../components/layouts/HomeLayout";
import MyRightBox from "../../components/MyRightBox/MyRightBox";
import style from "./Article.module.scss";
import { Link } from "react-router-dom";

class Article extends Component {
    render() {
        return (
            <>
                <HomeLayout>
                    <div className={style.content}>
                        <div className={style.contentLeft}>
                            <div className={style.articlesTitle}>
                                <div className={style.title}>技术分享</div>
                                <div className={style.articleRightTitle}>
                                    <Link to="/">回到首页 &gt;&gt;</Link>
                                </div>
                            </div>
                            <MyArticle></MyArticle>
                        </div>
                        <div className={style.contentRight}>
                            <MyRightBox></MyRightBox>
                        </div>
                    </div>
                </HomeLayout>
            </>
        );
    }
}

export default Article;
