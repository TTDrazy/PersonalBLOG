import React, { Component } from 'react'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import AdminLayout from '../layouts/AdminLayout'
import MyTable from '../MyTable/MyTable'
import MySearch from '../MyInput/MySearch'
import MySelect from '../MyInput/MySelect'
import style from './Manage.module.scss'
import { Link } from 'react-router-dom'
import ArticleService from '@/service/admin/article/ArticleService'

class Manage extends Component {
  state = {
    tableList: this.props.tableList,
    messageData: 0,
  }
  async removeById(id) {
    const articleService = new ArticleService()
    await articleService.removeArticleById(id).then((data) => {
      this.setState({
        messageData: data,
      })
    })
  }
  render() {
    const { messageData } = this.state
    const { isClassify } = this.props
    return (
      <div>
        <AdminLayout>
          <div className={style.container}>
            <div className={style.InputBox}>
              <div className={style.select}>
                <MySelect isClassify={isClassify}></MySelect>
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
                    to={`/admin/${isClassify ? 'classify' : 'article'}/add`}
                  >
                    <PlusOutlined />
                    {isClassify ? '新增分类' : '新增文章'}
                  </Link>
                </Button>
              </div>
              <MyTable
                isClassify={isClassify}
                messageData={messageData}
                tableList={this.state.tableList}
                everyPageShowInfo={10}
                removeById={(id) => this.removeById(id)}
              ></MyTable>
            </div>
          </div>
        </AdminLayout>
      </div>
    )
  }
}

export default Manage
