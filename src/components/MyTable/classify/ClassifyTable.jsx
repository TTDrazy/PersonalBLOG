import React, { Component } from "react";
import { Table, Tag, Space, Button, Checkbox } from "antd";
import style from "../article/ArticleTable.module.scss";

const { Column, ColumnGroup } = Table;

class ClassifyTable extends Component {
    state = {
        isLoading: true,
        tableList: [],
    };
    componentDidMount() {
        this.setState({
            isLoading: false,
        });
    }
    onChange(e, text) {
        console.log(`id 为 ${text.id} 的 checked = ${e.target.checked}`);
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
                        title="分类编号"
                        dataIndex="id"
                        key="id"
                    />
                    <Column
                        align="center"
                        title="分类名称"
                        dataIndex="name"
                        key="name"
                    />
                    <Column
                        align="center"
                        title="所属分类"
                        dataIndex="classifyList"
                        key="classifyList"
                        render={(classifyList) => (
                            <>
                                {classifyList.map((item) => (
                                    <Tag color="blue" key={item}>
                                        {item}
                                    </Tag>
                                ))}
                            </>
                        )}
                    />
                    <Column
                        align="center"
                        title="是否启用"
                        dataIndex="isOpen"
                        key="isOpen"
                        render={(isOpen, text) => (
                            <Checkbox
                                defaultChecked={isOpen}
                                onChange={(e) => this.onChange(e, text)}
                            ></Checkbox>
                        )}
                    />
                    <ColumnGroup title="时间">
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
                    </ColumnGroup>
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

export default ClassifyTable;
