export default class EditDTO {
    constructor({ id, name, classifyId, isShow, mdTextarea, mdContent }: {
        id: any;
        name: any;
        classifyId: any;
        isShow: any;
        mdTextarea: any;
        mdContent: any;
    });
    id: number;
    name: string | null;
    classifyid: number | null;
    isshow: number | null;
    edittime: string;
    mdtextarea: string | null;
    mdcontent: string | null;
}
