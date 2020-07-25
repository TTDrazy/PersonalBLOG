import React, { Component } from "react";
import HomeLayout from "../../components/layouts/HomeLayout";
import { Carousel, Typography } from "antd";
import style from "./Home.module.scss";
const { Title } = Typography;

class Home extends Component {
    onChange(a, b, c) {
        console.log(a, b, c);
    }
    render() {
        return (
            <HomeLayout>
                <div className={style.content}>
                    <div className={style.contentLeft}>
                        <div className={style.carouselBox}>
                            <Carousel afterChange={() => this.onChange}>
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
                                    <Title level={3}>关于博主</Title>
                                    <p>
                                        个人资料：女，九零后，IT女，天秤座，最佳程序员鼓励师
                                        爱好：唠嗑、打游戏
                                    </p>
                                </div>
                                <div className={style.aboutBox}>
                                    <Title level={3}>关于生活</Title>
                                    <p>
                                        要热爱生活鸭~
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.contentRight}>123</div>
                </div>
            </HomeLayout>
        );
    }
}

export default Home;
