import React, { Component } from "react";
import {
    Table,
    Tag,
    Space,
    Button,
    Popconfirm,
    message as Message,
    Badge,
} from "antd";
import style from "./MyTable.module.scss";
import { Link } from "react-router-dom";
import ArticleAPI from "../../api/ArticleAPI";

const { Column } = Table;

class MyTable extends Component {
    state = {
        isLoading: true,
        tableList: this.props.tableList,
    };
    componentDidMount() {
        if (this.state.tableList.length !== 0) {
            this.setState({
                isLoading: false,
            });
        }
    }
    confirmDelete(id) {
        let newTableList = this.state.tableList.filter(
            (item) => item.id !== id
        );
        this.setState({
            tableList: newTableList,
        });
        new ArticleAPI().removeById(id).then((resolve, reject) => {
            let { status, message } = resolve.data;
            if (status === 100) {
                Message.success(`删除成功！`);
            } else {
                Message.warning(message);
            }
        });
    }

    cancelDelete() {
        Message.warning("已取消删除操作！");
    }
    render() {
        const { everyPageShowInfo, isClassify } = this.props;
        let { isLoading, tableList } = this.state;
        return (
            <>
                <Table
                    dataSource={tableList}
                    loading={isLoading}
                    pagination={{ pageSize: everyPageShowInfo }}
                    className={style.myTable}
                >
                    <Column
                        align="center"
                        title={isClassify ? "分类编号" : "文章编号"}
                        dataIndex="id"
                        key="id"
                    />
                    <Column
                        align="center"
                        title={isClassify ? "分类名称" : "文章名称"}
                        dataIndex="name"
                        key="name"
                    />
                    {!isClassify ? (
                        <Column
                            align="center"
                            title="所属分类"
                            // dataIndex="classifyName"
                            // key="classifyName"
                            dataIndex="classifyId"
                            key="classifyId"
                            // render={(classifyName) => (
                            //     <Tag color="blue" key={classifyName}>
                            //         {classifyName}
                            //     </Tag>
                            // )}
                            render={(classifyId) => (
                                <Tag color="blue" key={classifyId}>
                                    {classifyId}
                                </Tag>
                            )}
                        />
                    ) : (
                        <></>
                    )}
                    <Column
                        align="center"
                        title="状态"
                        dataIndex="isShow"
                        key="isShow"
                        render={(isShow) => (
                            <Badge
                                status={isShow ? "processing" : "default"}
                                text={
                                    !isClassify
                                        ? isShow
                                            ? "展示"
                                            : "非展示"
                                        : isShow
                                        ? "启用"
                                        : "非启用"
                                }
                            />
                        )}
                    />
                    <Column
                        align="center"
                        title="创建时间"
                        dataIndex="createTime"
                        key="createTime"
                    />
                    <Column
                        align="center"
                        title="修改时间"
                        dataIndex="editTime"
                        key="editTime"
                    />

                    <Column
                        align="center"
                        title="操作"
                        key="action"
                        render={(text, record) => (
                            <Space size="middle">
                                <Link
                                    to={{
                                        pathname: `/admin/${
                                            isClassify ? "classify" : "article"
                                        }/edit`,
                                        query: { id: text.id },
                                    }}
                                >
                                    <Button type="dashed">修改</Button>
                                </Link>

                                <Popconfirm
                                    title={`您确定要删除 id 为： ${text.id} 的该条数据吗？`}
                                    onConfirm={() =>
                                        this.confirmDelete(text.id)
                                    }
                                    onCancel={() => this.cancelDelete()}
                                    okText="是"
                                    cancelText="否"
                                >
                                    <Button type="danger">删除</Button>
                                </Popconfirm>
                            </Space>
                        )}
                    />
                </Table>
            </>
        );
    }
}

export default MyTable;
