import React, { Component } from 'react'
import Manage from '@/components/Manage/Manage'
import ArticleService from '@/service/admin/article/ArticleService'

class ArticleManage extends Component {
  state = {
    tableList: [],
  }
  componentDidMount() {
    let articleService = new ArticleService()
    articleService.getArticleTableList().then((data) => {
      this.setState({ tableList: data })
    })
  }
  render() {
    let { tableList } = this.state
    return tableList.length !== 0 ? (
      <Manage tableList={tableList}></Manage>
    ) : (
      '后台数据失联啦，请等待。。。'
    )
  }
}

export default ArticleManage
