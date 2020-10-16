export default class AddDTO {
    constructor({ name, classifyId, isShow, mdTextarea, mdContent }: {
        name?: string;
        classifyId?: number;
        isShow?: number;
        mdTextarea: any;
        mdContent: any;
    });
    name: string;
    classifyid: number;
    isshow: number;
    createtime: string;
    mdtextarea: string | null;
    mdcontent: string | null;
}
