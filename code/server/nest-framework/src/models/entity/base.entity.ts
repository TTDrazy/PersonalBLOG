import { PrimaryGeneratedColumn, Column } from "typeorm";

export default class BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column("datetime")
    createtime: string;

    @Column('datetime',{default:null})
    edittime: string;
}