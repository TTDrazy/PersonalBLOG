export default class ClassifyVO {
    constructor({ id, name, lastid, isshow, createtime, edittime, classifylist, }: {
        id: any;
        name: any;
        lastid: any;
        isshow: any;
        createtime: any;
        edittime: any;
        classifylist?: any[];
    });
    id: number;
    name: string;
    lastId: number | null;
    isShow: boolean;
    createTime: number;
    editTime: number | null;
    classifyList: any[];
}
