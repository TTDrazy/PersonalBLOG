import React, { Component } from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AdminLayout from "../layouts/AdminLayout";
import MyTable from "../MyTable/MyTable";
import MySearch from "../MyInput/MySearch";
import MySelect from "../MyInput/MySelect";
import style from "./Manage.module.scss";
import { Link } from "react-router-dom";

class Manage extends Component {
    state = {
        tableList: this.props.tableList,
    };
    componentDidMount() {
        let list = this.props.tableList;
        if (`${list[0].createTime}`.length === 13) {
            list.map((item) => {
                item.createTime = this.timestampToTime(item.createTime);
                item.editTime = !!item.editTime
                    ? this.timestampToTime(item.editTime)
                    : "";
            });
        }
        this.setState({
            tableList: list,
        });
    }
    /**
     *将时间戳转换成正常时间格式
     *
     * @param {*} timestamp - 13 位时间戳
     * @returns
     * @memberof Manage
     */
    timestampToTime(timestamp) {
        var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + "-";
        var M =
            (date.getMonth() + 1 < 10
                ? "0" + (date.getMonth() + 1)
                : date.getMonth() + 1) + "-";
        var D = date.getDate() + " ";
        var h = date.getHours() + ":";
        var m = date.getMinutes() + ":";
        var s = date.getSeconds();
        return Y + M + D + h + m + s;
    }
    render() {
        const { isClassify, classifyTree } = this.props;
        return (
            <div>
                <AdminLayout>
                    <div className={style.container}>
                        <div className={style.InputBox}>
                            <div className={style.select}>
                                <MySelect
                                    isClassify={isClassify}
                                ></MySelect>
                            </div>
                            <div className={style.search}>
                                <MySearch isClassify={isClassify}></MySearch>
                            </div>
                        </div>
                        <div className={style.tableBox}>
                            <div className={style.tableTitle}>
                                <div className={style.title}>查询表格</div>
                                <Button type="primary">
                                    <Link
                                        to={`/admin/${
                                            isClassify ? "classify" : "article"
                                        }/add`}
                                    >
                                        <PlusOutlined />
                                        {isClassify ? "新增分类" : "新增文章"}
                                    </Link>
                                </Button>
                            </div>
                            <MyTable
                                isClassify={isClassify}
                                tableList={this.state.tableList}
                                everyPageShowInfo={10}
                            ></MyTable>
                        </div>
                    </div>
                </AdminLayout>
            </div>
        );
    }
}

export default Manage;
