export default class AddDTO {
    constructor({ name, lastId, isShow }: {
        name?: string;
        lastId: any;
        isShow?: number;
    });
    name: string | null;
    lastid: number | null;
    isshow: number | null;
    createtime: string;
}
