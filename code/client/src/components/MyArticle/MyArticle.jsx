import React, { Component } from 'react'
import { Typography } from 'antd'
import style from './MyArticle.module.scss'
import user from '../../assets/imgs/home/user.png'
import createCalendar from '../../assets/imgs/home/calendar-create.png'
import editCalendar from '../../assets/imgs/home/calendar-edit.png'
import { Link } from 'react-router-dom'

const { Title } = Typography

class MyArticle extends Component {
  render() {
    const {
      // articleId,
      articleName,
      createTime,
      editTime,
      mdContent,
      // classifyId,
      // classifyName,
    } = this.props.articleInfo
    return (
      <div className={style.articleContent}>
        <div className={style.title}>
          <Title level={2}>{articleName}</Title>
        </div>
        <div className={style.articleInfo}>
          <div className={style.infoBox}>
            <img src={user}></img>
            <span>Drazy</span>
          </div>
          <div className={style.infoBox}>
            <img src={createCalendar}></img>
            <span>{createTime}</span>
          </div>
          <div className={style.infoBox}>
            <img src={editCalendar}></img>
            <span>{editTime}</span>
          </div>
        </div>
        <div
          className={style.content}
          dangerouslySetInnerHTML={{ __html: mdContent }}
        ></div>
        <div className={style.copyright}>
          <div>
            <strong>版权声明：</strong>本站原创文章，于
            <span> {createTime} </span>由{' '}
            <Link to="/aboutme">
              <span className={style.black}>Drazy</span>{' '}
            </Link>
            发表
          </div>
          <div>
            <strong>转载请注明：</strong>
            <Link to="/article">
              <span className={style.black}>{articleName}</span>{' '}
            </Link>
            |{' '}
            <Link to="/">
              <span className={style.black}>Drazy 的博客</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default MyArticle
