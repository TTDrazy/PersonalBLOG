import React, { Component } from "react";
import style from "./MyListCard.module.scss";
import calendar from "../../assets/imgs/home/calendar.png";

class MyListCard extends Component {
    render() {
        return (
            <>
                <div className={style.listCardBox}>
                    <div className={style.time}>
                        <img src={calendar}></img>
                        <span>2020-07-26</span>
                    </div>
                    <div className={style.content}>
                        菜菜小马，呜呜呜。今天张猪猪又想骂我了呜呜呜
                    </div>
                </div>
            </>
        );
    }
}

export default MyListCard;
