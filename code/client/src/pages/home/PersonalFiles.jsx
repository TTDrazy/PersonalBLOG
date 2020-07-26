import React, { Component } from "react";
import { Timeline, Button } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import HomeLayout from "../../components/layouts/HomeLayout";
import style from "./PersonalFiles.module.scss";

class PersonalFiles extends Component {
    render() {
        return (
            <HomeLayout>
                <div className={style.content}>
                    <div className={style.yearButtons}>
                        <Button>2020</Button>
                        <Button>2019</Button>
                        <Button>2018</Button>
                    </div>
                    <div className={style.timeLineBox}>
                        <Timeline mode={"left"} className={style.timeLine}>
                            <Timeline.Item
                                dot={
                                    <ClockCircleOutlined
                                        style={{ fontSize: "16px" }}
                                    />
                                }
                            >
                                2020
                            </Timeline.Item>
                            <Timeline.Item>被骂了</Timeline.Item>
                            <Timeline.Item label="07-26 17:32:20">
                                哭哭，晚上又会被张猪猪骂，嘤嘤嘤
                            </Timeline.Item>
                            <Timeline.Item label="07-22">
                                打死他，臭猪猪
                            </Timeline.Item>
                            <Timeline.Item label="07-21">
                                我要和张猪猪打架
                            </Timeline.Item>
                            <Timeline.Item
                                dot={
                                    <ClockCircleOutlined
                                        style={{ fontSize: "16px" }}
                                    />
                                }
                            >
                                2019
                            </Timeline.Item>
                            <Timeline.Item label="07-21">
                                我要和张猪猪打架
                            </Timeline.Item>
                            <Timeline.Item
                                dot={
                                    <ClockCircleOutlined
                                        style={{ fontSize: "16px" }}
                                    />
                                }
                            >
                                2018
                            </Timeline.Item>
                            <Timeline.Item label="07-21">
                                我要和张猪猪打架
                            </Timeline.Item>
                        </Timeline>
                    </div>
                </div>
            </HomeLayout>
        );
    }
}

export default PersonalFiles;
