import React, { Component } from 'react'
import HomeLayout from '../../components/layouts/HomeLayout'
import { Carousel, Typography } from 'antd'
import style from './Home.module.scss'
import MyCard from '../../components/MyCard/MyCard'
import { Link } from 'react-router-dom'
import ArticleService from '@/service/home/article/ArticleService'
import MyRightBox from '@/components/MyRightBox/MyRightBox'

const { Title } = Typography

class Home extends Component {
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
  onChange(a, b, c) {
    //轮播图改变
  }
  render() {
    let { cardList } = this.state
    return (
      <HomeLayout>
        <div className={style.content}>
          <div className={style.contentLeft}>
            <div className={style.carouselBox}>
              <Carousel
                className={style.carousel}
                autoplay
                afterChange={this.onChange}
                lazyLoad="progressive"
              >
                <div>
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
              </Carousel>
              <div className={style.rightBox}>
                <div className={style.aboutBox}>
                  <Title level={4}>关于博主</Title>
                  <p>
                    个人资料：女，九零后的小尾巴，IT女，天秤座，最佳程序员鼓励师
                    爱好：唠嗑、打游戏
                  </p>
                </div>
                <div className={`${style.aboutBox} ${style.aboutLife}`}>
                  <Title level={4}>关于生活</Title>
                  <p>要热爱生活鸭~</p>
                </div>
              </div>
            </div>
            <div className={style.articlesTitle}>
              <div className={style.title}>最新文章</div>
              <div className={style.articleRightTitle}>
                <Link to="/codeshare">
                  <span>技术分享(10)</span>
                </Link>
                <Link to="/happywriting">
                  <span>心情随笔(5)</span>
                </Link>
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

export default Home
