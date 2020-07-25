import { Repository } from "typeorm";
import Classify from "src/models/entity/classify.entity";
export declare class ClassifyService {
    private classifyRepository;
    constructor(classifyRepository: Repository<Classify>);
    private getNameInfoById;
    getClassifyList(allData: any[]): any;
    getChildrenTree(allData: any[], parentId: number, classifyInfo: any): any;
    getList(): Promise<Classify[]>;
    findOne(id: number): Promise<Classify>;
    addOne(classify: any): Promise<Classify>;
    editOne(classify: any): any;
    removeById(id: number): any;
}
