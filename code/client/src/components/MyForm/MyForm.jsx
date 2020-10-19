import React, { Component } from 'react'
import style from './MyForm.module.scss'
import { Input, Button, Radio, message as Message } from 'antd'
import MySelect from '../MyInput/MySelect'
import { Link, withRouter } from 'react-router-dom'
import MyMarkdown from '../MyMarkdown/MyMarkdown'
import ClassifyService from '@/service/admin/classify/ClassifyService'
import ArticleService from '@/service/admin/article/ArticleService'

class MyForm extends Component {
  state = {
    isClassify: this.props.isClassify,
    id: 0,
    name: '',
    classifyId: null,
    classifyList: [],
    createTime: '',
    editTime: '',
    isShow: true,
    mdTextarea: '',
    mdContent: '',
  }
  componentDidMount() {
    const classifyService = new ClassifyService()
    classifyService.getClassifyTree().then((data) => {
      this.setState({ classifyList: data })
    })
    if (!!this.props.list) {
      const {
        id,
        name,
        classifyId,
        createTime,
        editTime,
        mdTextarea,
        mdContent,
        isShow,
      } = this.props.list
      this.setState({
        id,
        name,
        classifyId,
        createTime,
        editTime,
        mdTextarea,
        mdContent,
        isShow,
      })
    }
  }
  /**
   * 获取 MyMarkdown 组件中的 mdTextarea 及 mdContent
   *
   * @memberof MyForm
   */
  getMd = (mdState) => {
    const { mdTextarea, mdContent } = mdState
    this.setState({
      mdTextarea,
      mdContent,
    })
  }
  onChange = (e) => {
    this.setState({
      isShow: e.target.value,
    })
  }
  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  changeSelect = (id) => {
    this.setState({
      classifyId: id,
    })
  }
  submit = () => {
    const { id, isClassify } = this.state
    const articleService = new ArticleService()
    if (id === 0) {
      // console.log(this.state)
      articleService.addArticle(this.state).then((data) => {
        Message.success(
          `您已成功${isClassify ? '增加此分类' : '上传此篇文章'}！`
        )
        console.log(data)
      })
    }
    //else {
    //   new ArticleApi().editArticle(this.state).then((resolve, reject) => {
    //     let { status, message, data } = resolve.data
    //     if (status === 100) {
    //       Message.success(`您已成功修改此${isClassify ? '分类' : '篇文章'}！`)
    //     } else {
    //       Message.warning(message)
    //     }
    //   })
    //}

    //跳转路由
    //this.props.history.push(`/admin/${isClassify ? 'classify' : 'article'}`)
  }
  render() {
    const {
      isClassify,
      id,
      name,
      createTime,
      editTime,
      mdTextarea,
      mdContent,
      isShow,
      classifyList,
    } = this.state
    return (
      <>
        <div className={style.container}>
          <div className={style.formBox}>
            {id === 0 ? (
              <></>
            ) : (
              <div className={style.row}>
                <div className={[`${style.column} ${style.label}`]}>
                  {isClassify ? '分类' : '文章'}编号：
                </div>
                <div className={[`${style.column} ${style.inputBox}`]}>
                  <span>{id}</span>
                </div>
              </div>
            )}
            <div className={style.row}>
              <div className={[`${style.column} ${style.label}`]}>
                {isClassify ? '分类' : '文章'}标题：
              </div>
              <div className={[`${style.column} ${style.inputBox}`]}>
                <Input
                  name="name"
                  value={name}
                  onChange={(e) => this.changeInput(e)}
                ></Input>
              </div>
            </div>
            <div className={style.row}>
              <div className={[`${style['column']} ${style['label']}`]}>
                {isClassify ? '' : '文章'}所属分类：
              </div>
              <div className={[`${style.column} ${style.inputBox}`]}>
                {classifyList.length !== 0 ? (
                  <MySelect
                    selectTree={classifyList}
                    type="select"
                    placeholder="请选择分类"
                    changeSelect={(id) => this.changeSelect(id)}
                  ></MySelect>
                ) : (
                  ''
                  // <MySelect
                  //     type="select"
                  //     placeholder="请选择分类"
                  //     changeSelect={(list) =>
                  //         this.changeSelect(list)
                  //     }
                  // ></MySelect>
                )}
              </div>
            </div>
            {isClassify ? (
              <></>
            ) : (
              <div className={style.row}>
                <div className={[`${style['column']} ${style['label']}`]}>
                  文章内容：
                </div>
                <div className={[`${style.column} ${style.inputBox}`]}>
                  {!!mdTextarea ? (
                    <MyMarkdown
                      rows="15"
                      getMd={this.getMd}
                      mdTextarea={mdTextarea}
                      mdContent={mdContent}
                    ></MyMarkdown>
                  ) : (
                    <MyMarkdown rows="15" getMd={this.getMd}></MyMarkdown>
                  )}
                </div>
              </div>
            )}
            <div className={style.row}>
              <div className={[`${style['column']} ${style['label']}`]}>
                是否{isClassify ? '启用' : '展示'}：
              </div>
              <div className={[`${style.column} ${style.inputBox}`]}>
                <Radio.Group onChange={this.onChange} value={isShow}>
                  <Radio value={true}>{isClassify ? '启用' : '展示'}</Radio>
                  <Radio value={false}>非{isClassify ? '启用' : '展示'}</Radio>
                </Radio.Group>
              </div>
            </div>

            {id === 0 ? (
              <></>
            ) : (
              <div className={style.row}>
                <div className={style.column}></div>
                <div className={[`${style.column} ${style.date}`]}>
                  <div>
                    创建时间：
                    {createTime}
                  </div>
                </div>
              </div>
            )}
            <div className={style.row}>
              <div className={style.column}></div>
              <div className={[`${style.column} ${style.date}`]}>
                {editTime ? (
                  <div>
                    修改时间：
                    {editTime}
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>

            <div className={style.row}>
              <div className={style.column}></div>
              <div className={style.column}>
                <Button
                  className={style.myButton}
                  type="primary"
                  onClick={() => this.submit()}
                >
                  提交
                </Button>
                <Link to={`/admin/${isClassify ? 'classify' : 'article'}`}>
                  <Button className={style.myButton}>取消</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default withRouter(MyForm)
