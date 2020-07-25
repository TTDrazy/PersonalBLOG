export default class EditDTO {
    constructor({ id, name, lastId, isShow }: {
        id: any;
        name: any;
        lastId: any;
        isShow: any;
    });
    id: number;
    name: string | null;
    lastid: number;
    isshow: number | null;
    edittime: string;
}
