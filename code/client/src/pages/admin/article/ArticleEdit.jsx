import React, { Component } from 'react'
import AdminLayout from '../../../components/layouts/AdminLayout'
import MyForm from '../../../components/MyForm/MyForm'
import ArticleApi from '../../../api/article/ArticleApi'
import { message as Message } from 'antd'
import { withRouter } from 'react-router'
import ClassifyService from '@/service/admin/classify/ClassifyService'
import ArticleService from '@/service/admin/article/ArticleService'

class ArticleEdit extends Component {
  state = {
    //拿到路由传过来的参数 id
    id: null,
    name: '',
    classifyId: null,
    mdTextarea: '',
    mdContent: '',
    isShow: true,
    createTime: '',
    editTime: '',
    classifyTreeList: [],
    messageData: {},
  }
  componentDidMount() {
    if (!this.props.location.query) {
      Message.warning('未获取到该条文章信息，请重新进行修改操作！')
      this.props.history.push('/admin/article')
    } else {
      let id = this.props.location.query.id
      this.setState({
        id: id,
      })
      const classifyService = new ClassifyService()
      classifyService.getClassifyTree().then((data) => {
        this.setState({ classifyTreeList: data })
      })
      const articleService = new ArticleService()
      articleService.getArticleById(this.state.id).then((data) => {
        this.setState({
          name: data.name,
          classifyName: data.classifyName,
          isShow: data.isShow,
          mdTextarea: data.mdTextarea,
          mdContent: data.mdContent,
        })
      })
    }
  }
  async editArticle(articleData) {
    const articleService = new ArticleService()
    await articleService.editArticle(articleData).then((data) => {
      this.setState({
        messageData: data,
      })
    })
  }
  render() {
    const { messageData } = this.props
    return !!this.state.classifyId ? (
      <>
        {console.log('enter')}
        <AdminLayout>
          <MyForm
            messageData={messageData}
            list={this.state}
            editArticle={(articleData) => this.editArticle(articleData)}
          ></MyForm>
        </AdminLayout>
      </>
    ) : (
      <></>
    )
  }
}
export default withRouter(ArticleEdit)
