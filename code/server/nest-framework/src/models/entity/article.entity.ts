import { Column, Entity, ManyToOne, RelationId, JoinColumn } from 'typeorm'
import BaseEntity from './base.entity'
import Classify from './classify.entity'

@Entity()
export default class Article extends BaseEntity {
  @Column('int')
  id: number

  @Column('varchar')
  name: string

  @ManyToOne(
    (type) => Classify,
    (classify) => classify.articles
  )
  @JoinColumn({ name: 'classifyid' })
  classify: Classify

  // @Column()
  @RelationId((article: Article) => article.classify)
  classifyid: number

  @Column('tinyint')
  isshow: number

  @Column('datetime')
  createtime: string

  @Column('datetime', { default: null })
  edittime: string

  @Column('longtext')
  mdtextarea: string

  @Column('longtext', { default: null })
  mdcontent: string
}
