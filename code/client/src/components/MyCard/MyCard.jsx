import React, { Component } from 'react'
import { Typography } from 'antd'
import style from './MyCard.module.scss'
import tag from '../../assets/imgs/home/tag.png'
import time from '../../assets/imgs/home/time.png'
import view from '../../assets/imgs/home/view.png'
import { Link, withRouter } from 'react-router-dom'

const { Paragraph } = Typography

class MyCard extends Component {
  toArticleDetails(articleId) {
    if (!!articleId) {
      this.props.history.push({ pathname: '/article', query: articleId })
    }
  }
  render() {
    return this.props.cardList.map((item) => {
      return (
        <div key={item.id}>
          <div className={style.articleBox}>
            <div className={style.articleImg}>
              <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"></img>
            </div>
            <div className={style.articleContentBox}>
              <div
                className={style.articleTitle}
                onClick={() => this.toArticleDetails(item.id)}
              >
                {item.name}
              </div>
              <div
                className={style.articleContent}
                onClick={() => this.toArticleDetails(item.id)}
              >
                <Paragraph
                  // ellipsis={{
                  //   rows: 2,
                  // }}
                  className={style.article}
                >
                  {item.briefContent}
                  <a onClick={() => this.toArticleDetails(item.id)}>[详情]</a>
                </Paragraph>
              </div>
              <div className={style.articleBottom}>
                <div className={style.leftBox}>
                  <div className={style.tag}>
                    <img src={tag}></img>
                    <Link to="/codeshare">{item.classifyName}</Link>
                  </div>
                  <div className={style.createtime}>
                    <img src={time}></img>
                    {item.dateTime}
                  </div>
                </div>
                <div className={style.rightBox}>
                  <div className={style.viewedNumber}>
                    <img src={view}></img>100
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }
}

export default withRouter(MyCard)
