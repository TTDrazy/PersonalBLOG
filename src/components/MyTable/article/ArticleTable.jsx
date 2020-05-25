import React, { Component } from "react";
import { Table, Tag, Space, Button ,Popconfirm} from "antd";
import style from "./ArticleTable.module.scss";

const { Column } = Table;

class ArticleTable extends Component {
    state = {
        isLoading: true,
        tableList: [],
    };
    componentDidMount() {
        this.setState({
            isLoading: false,
        });
    }
    render() {
        const { tableList, everyPageShowInfo } = this.props;
        const { isLoading } = this.state;
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
                        title="文章编号"
                        dataIndex="id"
                        key="id"
                    />
                    <Column
                        align="center"
                        title="文章名称"
                        dataIndex="name"
                        key="name"
                    />
                    <Column
                        align="center"
                        title="所属分类"
                        dataIndex="classifyName"
                        key="classifyName"
                        render={(classifyName) => (
                            <Tag color="blue" key={classifyName}>
                                {classifyName}
                            </Tag>
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
                                <Button
                                    type="dashed"
                                    onClick={() =>
                                        alert(
                                            `我要修改 id 为${text.id}的信息！`
                                        )
                                    }
                                >
                                    修改
                                </Button>
                                <Button
                                    type="danger"
                                    onClick={() =>
                                        alert(
                                            `我要删除 id 为${text.id}的信息！`
                                        )
                                    }
                                >
                                    删除
                                </Button>
                            </Space>
                        )}
                    />
                </Table>
            </>
        );
    }
}

export default ArticleTable;
