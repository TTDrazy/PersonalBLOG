import { Column, Entity ,OneToMany} from 'typeorm';
import BaseEntity from './base.entity';
import Article from './article.entity';

@Entity()
export default class Classify extends BaseEntity {
  @Column('int')
  id: number;

  @Column('varchar')
  name: string;

  @OneToMany(type=>Article,article=>article.classify)
  articles:Article[];

  @Column('int', { default: null })
  lastid: number;

  @Column('tinyint')
  isshow: number;

  @Column('datetime')
  createtime: string;

  @Column('datetime', { default: null })
  edittime: string;
}
