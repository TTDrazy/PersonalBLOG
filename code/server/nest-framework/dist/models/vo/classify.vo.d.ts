import Classify from 'src/models/entity/classify.entity';
export default class ClassifyVO {
    constructor({ id, name, lastid, isshow, createtime, edittime, children }: {
        id: any;
        name: any;
        lastid: any;
        isshow: any;
        createtime: any;
        edittime: any;
        children?: any[];
    });
    id: number;
    name: string;
    lastId: number | null;
    isShow: boolean;
    createTime: number;
    editTime: number | null;
    children: Array<Classify>;
}
