import { Column, Entity, ManyToOne, RelationId } from 'typeorm'
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
  classify: Classify

  @RelationId((article: Article) => article.classify)
  // @Column('int')
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
