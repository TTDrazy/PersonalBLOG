import React, { Component } from "react";
import HomeLayout from "../../components/layouts/HomeLayout";
import { Carousel, Typography } from "antd";
import style from "./Home.module.scss";

import MyCard from "../../components/MyCard/MyCard";
import { Link } from "react-router-dom";

const { Title } = Typography;

class Home extends Component {
    onChange(a, b, c) {
        //轮播图改变
    }
    render() {
        return (
            <HomeLayout>
                <div className={style.content}>
                    <div className={style.contentLeft}>
                        <div className={style.carouselBox}>
                            <Carousel
                                className={style.carousel}
                                autoplay
                                afterChange={this.onChange}
                                lazyLoad="progressive"
                            >
                                <div>
                                    <h3>1</h3>
                                </div>
                                <div>
                                    <h3>2</h3>
                                </div>
                                <div>
                                    <h3>3</h3>
                                </div>
                                <div>
                                    <h3>4</h3>
                                </div>
                            </Carousel>
                            <div className={style.rightBox}>
                                <div className={style.aboutBox}>
                                    <Title level={4}>关于博主</Title>
                                    <p>
                                        个人资料：女，九零后的小尾巴，IT女，天秤座，最佳程序员鼓励师
                                        爱好：唠嗑、打游戏
                                    </p>
                                </div>
                                <div
                                    className={`${style.aboutBox} ${style.aboutLife}`}
                                >
                                    <Title level={4}>关于生活</Title>
                                    <p>要热爱生活鸭~</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.articlesTitle}>
                            <div className={style.title}>最新文章</div>
                            <div className={style.articleRightTitle}>
                                <Link to="/codeshare">
                                    <span>技术分享(10)</span>
                                </Link>
                                <Link to="/happywriting">
                                    <span>心情随笔(5)</span>
                                </Link>
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
                        </div>
                    </div>
                    <div className={style.contentRight}>
                        <div className={style.contentRightBox}>
                            <div className={style.aboutRight}>关注我</div>
                            <hr></hr>
                            <div className={style.chatIcons}>
                                <div className={style.chatIconBox}>
                                    <div
                                        className={`${style.chatIcon} ${style.weixin}`}
                                    ></div>
                                    <span>微信</span>
                                </div>
                                <div className={style.chatIconBox}>
                                    <a
                                        className={`${style.chatIcon} ${style.weibo}`}
                                        href="https://weibo.com/3727705537/profile?rightmod=1&wvr=6&mod=personnumber&is_all=1#_rnd1595730321423"
                                    ></a>
                                    <span>新浪微博</span>
                                </div>
                                <div className={style.chatIconBox}>
                                    <a
                                        className={`${style.chatIcon} ${style.email}`}
                                        href="mailto:2421209781@qq.com"
                                    ></a>
                                    <span>邮箱</span>
                                </div>
                                <div className={style.chatIconBox}>
                                    <div
                                        className={`${style.chatIcon} ${style.feedBack}`}
                                    ></div>
                                    <span>意见反馈</span>
                                </div>
                            </div>
                        </div>
                        <div className={style.contentRightBox}>
                            <div className={style.aboutRight}>最新文章</div>
                            <hr></hr>
                            <ul>
                                <li>xxx</li>
                                <li>xxx</li>
                                <li>xxx</li>
                                <li>xxx</li>
                                <li>xxx</li>
                            </ul>
                        </div>
                        <div className={style.contentRightBox}>
                            <div className={style.aboutRight}>友情链接</div>
                            <hr></hr>
                            <div className={style.linkContent}>xxx</div>
                        </div>
                    </div>
                </div>
            </HomeLayout>
        );
    }
}

export default Home;
