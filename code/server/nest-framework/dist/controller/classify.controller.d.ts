import { ClassifyService } from 'src/service/Classify.service';
import ClassifyVO from 'src/models/vo/classify.vo';
export declare class ClassifyController {
    private classifyService;
    constructor(classifyService: ClassifyService);
    getList(): Promise<ClassifyVO[]>;
    getTree(): Promise<any>;
    getOneById(id: number): Promise<any>;
    addOne(classify: any): Promise<ClassifyVO>;
    editOne(Classify: any): Promise<any>;
    removeOneById(id: any): Promise<any>;
}
