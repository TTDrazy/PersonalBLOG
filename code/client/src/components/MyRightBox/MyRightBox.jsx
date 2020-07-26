import React, { Component } from "react";
import style from "./MyRightBox.module.scss";
import { Link } from "react-router-dom";

class MyRightBox extends Component {
    render() {
        return (
            <>
                <div className={style.contentRightBox}>
                    <div className={style.aboutRight}>关注我</div>
                    <hr></hr>
                    <div className={style.fastMoudle}>
                        <div className={`${style.moduleBox} ${style.aboutMe}`}>
                            <Link to="/aboutme">关于博主</Link>
                        </div>
                        <div
                            className={`${style.moduleBox} ${style.happyWriting}`}
                        >
                            <Link to="/happywriting">心情随笔</Link>
                        </div>
                        <div className={`${style.moduleBox} ${style.home}`}>
                            <Link to="/">网站首页</Link>
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
            </>
        );
    }
}

export default MyRightBox;
