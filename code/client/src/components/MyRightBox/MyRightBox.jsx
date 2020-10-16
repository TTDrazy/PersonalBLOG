import React, { Component } from 'react'
import style from './MyRightBox.module.scss'
import { Link, withRouter } from 'react-router-dom'
import ArticleService from '@/service/home/article/ArticleService'

class MyRightBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cardList: [],
    }
  }
  componentDidMount() {
    let articleService = new ArticleService()
    articleService.getArticleCardList().then((data) => {
      data = data.filter((item, index) => index < 5)
      this.setState({ cardList: data })
    })
  }
  toArticleDetails(articleId) {
    if (!!articleId) {
      this.props.history.push({ pathname: '/article', query: articleId })
    }
  }
  render() {
    const { cardList } = this.state
    return (
      <>
        <div className={style.contentRightBox}>
          <div className={style.aboutRight}>关注我</div>
          <hr></hr>
          <div className={style.fastMoudle}>
            <Link to="/aboutme">
              <span className={`${style.moduleBox} ${style.aboutMe}`}>
                关于博主
              </span>
            </Link>
            <Link to="/happywriting">
              <span className={`${style.moduleBox} ${style.happyWriting}`}>
                心情随笔
              </span>
            </Link>
            <Link to="/">
              <span className={`${style.moduleBox} ${style.home}`}>
                网站首页
              </span>
            </Link>
          </div>
        </div>
        <div className={style.contentRightBox}>
          <div className={style.aboutRight}>最新文章</div>
          <hr></hr>
          <ul>
            {cardList.map((item) => (
              <li key={item.id} onClick={() => this.toArticleDetails(item.id)}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className={style.contentRightBox}>
          <div className={style.aboutRight}>友情链接</div>
          <hr></hr>
          <div className={style.linkContent}>xxx</div>
        </div>
      </>
    )
  }
}

export default withRouter(MyRightBox)
