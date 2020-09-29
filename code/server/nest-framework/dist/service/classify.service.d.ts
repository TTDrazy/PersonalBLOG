import { Repository } from 'typeorm';
import Classify from 'src/models/entity/classify.entity';
export declare class ClassifyService {
    private classifyRepository;
    constructor(classifyRepository: Repository<Classify>);
    getTreeData: (allData: any) => any;
    getFlatData: (allData: any) => any[];
    getList(): Promise<Classify[]>;
    findOne(id: number): Promise<Classify>;
    addOne(classify: any): Promise<Classify>;
    editOne(classify: any): any;
    removeById(id: number): any;
}
