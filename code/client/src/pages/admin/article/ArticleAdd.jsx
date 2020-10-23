import React, { Component } from 'react'
import AdminLayout from '../../../components/layouts/AdminLayout'
import MyForm from '../../../components/MyForm/MyForm'
import ClassifyService from '@/service/admin/classify/ClassifyService'
import ArticleService from '@/service/admin/article/ArticleService'

export default class ArticleAdd extends Component {
  state = {
    classifyTreeList: [],
    messageData: {},
  }
  componentDidMount() {
    const classifyService = new ClassifyService()
    classifyService.getClassifyTree().then((data) => {
      this.setState({ classifyTreeList: data })
    })
  }
  async addArticle(articleData) {
    const articleService = new ArticleService()
    await articleService.addArticle(articleData).then((data) => {
      this.setState({
        messageData: data,
      })
    })
  }
  render() {
    const { classifyTreeList, messageData } = this.state
    return (
      <>
        <AdminLayout>
          <MyForm
            messageData={messageData}
            treeList={classifyTreeList}
            addData={(articleData) => this.addArticle(articleData)}
          ></MyForm>
        </AdminLayout>
      </>
    )
  }
}
