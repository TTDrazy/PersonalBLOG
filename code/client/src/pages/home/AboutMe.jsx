import React, { Component } from 'react'
import HomeLayout from '../../components/layouts/HomeLayout'
import { Pagination } from 'antd'
import style from './CodeShare.module.scss'
import MyCard from '../../components/MyCard/MyCard'
import MyRightBox from '../../components/MyRightBox/MyRightBox'
import { Link } from 'react-router-dom'
import ArticleService from '../../service/home/article/ArticleService'

class AboutMe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cardList: [],
    }
  }
  componentDidMount() {
    let articleService = new ArticleService()
    articleService.getArticleCardList().then((data) => {
      this.setState({ cardList: data })
    })
  }
  onChange(pageNumber) {
    console.log('Page: ', pageNumber)
  }
  render() {
    let { cardList } = this.state
    return (
      <HomeLayout>
        <div className={style.content}>
          <div className={style.contentLeft}>
            <div className={style.articlesTitle}>
              <div className={style.title}>关于我</div>
              <div className={style.articleRightTitle}>
                <Link to="/">回到首页 &gt;&gt;</Link>
              </div>
            </div>
            <div className={style.articles}>
              <MyCard cardList={cardList}></MyCard>
            </div>
          </div>
          <div className={style.contentRight}>
            <MyRightBox></MyRightBox>
          </div>
        </div>
      </HomeLayout>
    )
  }
}

export default AboutMe
