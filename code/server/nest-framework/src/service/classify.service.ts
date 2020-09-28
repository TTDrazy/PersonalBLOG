import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import Classify from "src/models/entity/classify.entity";

@Injectable()
export class ClassifyService {
    constructor(
        @InjectRepository(Classify)
        private classifyRepository: Repository<Classify>
    ) {}

    //find some item all child
    private findItemChild(dataitem) {
        var arrayList = [];
        allMenu.map((item) => {
            if (item.parent == dataitem.id) {
                arrayList.push(item);
            }
        });
        return arrayList;
    }
    //get all child
    private getAllChild(array) {
        var childList = this.findItemChild(array[0]);
        if (childList == null) {
            return [];
        } else {
            childList.map((item) => {
                item.children = [];
                item.children = this.getAllChild([item]);
            });
            array[0].children = childList;
        }
        return childList;
    }
    
    /**
     * 通过 lastid 得到 父级的 name 及 lastid 信息
     * @param {array} allData - 所有的 classify 数据
     * @param {number} lastid - 单条 classify 的父级 id
     * @return {object} 单条 classify 父级的 name 及 lastid 信息
     * @memberof ClassifyService
     */
    private getNameInfoById(allData: Classify[], lastid: number): any {
        const info = {};
        allData.map((item) => {
            if (item.id === lastid) {
                info["name"] = item.name;
                info["lastid"] = item.lastid;
                info["id"] = item.id;
            }
        });
        return info;
    }

    /**
     * 通过调用 getNameInfoById 方法使所有的 classify 数据都增加了一项 classifyList 代表层级关系的数组
     * @param {array} allData - 所有的 classify 数据
     * @return {array} 所有被包含了 classifyList 的数据，即 getNameInfoById 返回的 info 的聚合
     * @memberof ClassifyService
     */
    public getClassifyList(allData: any[]): any {
        let lastId = null;
        allData.map((item) => {
            item.classifylist = [];
            lastId = item.lastid;
            while (!!lastId) {
                const data = this.getNameInfoById(allData, lastId);
                const { lastid, id } = data;
                //lastid?item.classifylist.unshift(lastid):'';
                id ? item.classifylist.unshift(id) : "";
                lastId = lastid;
            }
            item.classifylist.push(item.id);
        });
        return allData;
    }

    /**
     * 通过递归调用返回了 classify 的层级树结构
     * 1. 在所有 classify 数据中 filter 出第一层下级放入父级的 childrenList 中
     * 2. 判断 childrenList 是否包含有 classify
     * 3. 如果包含有 classify， 就遍历 childrenList 并且逐个递归调用 getChildrenTree，直至 childrenList 无值
     * @param {array} allData - 所有的 classify 数据
     * @param {number} parentId - 单条 classify 的父级 id
     * @param {object} classifyInfo - 单条 classify
     * @return {array} 所有 classify 的层级树结构
     * @memberof ClassifyService
     */
    public getChildrenTree(
        allData: any[],
        parentId: number,
        classifyInfo: any
    ) {
        const childrenList = allData.filter((item) => item.lastId == parentId);
        if (childrenList.length > 0) {
            classifyInfo.children = [];
            childrenList.map((item) => {
                this.getChildrenTree(allData, item.id, item);
            });
            classifyInfo.children = childrenList;
        }
        return classifyInfo;
    }

    /**
     * 获取所有 Classify 信息
     * @returns {Promise<Classify[]>} 所有 Classify 信息并形成数组
     * @memberof ClassifyService
     */
    public getList(): Promise<Classify[]> {
        return this.classifyRepository.find();
    }

    /**
     * 根据 Classify Id 获取一条 Classify 信息
     * @param {number} id Classify Id
     * @returns {Promise<Classify>} Classify 信息
     * @memberof ClassifyService
     */
    public findOne(id: number): Promise<Classify> {
        return this.classifyRepository.findOne(id);
    }

    /**
     * 添加一条 Classify 信息
     * @param {*} classify 传过来的经过规范的 Classify AddDTO 模型
     * @returns {Promise<Classify>} 未经过规范的此条 Classify 存储 VO 模型
     * @memberof ClassifyService
     */
    public addOne(classify): Promise<Classify> {
        return this.classifyRepository.save(classify);
    }

    /**
     * 根据 id 修改一条 Classify 信息
     * @param {*} classify 传过来的经过规范的 Classify EditDTO 模型
     * @returns {*} 数据库存储信息
     * @memberof ClassifyService
     */
    public editOne(classify): any {
        return this.classifyRepository.update(classify.id, classify);
    }

    /**
     * 根据 id 删除一条 Classify 信息
     * @param {number} id Classify ID
     * @returns {*} 数据库存储信息
     * @memberof ClassifyService
     */
    public removeById(id: number): any {
        return this.classifyRepository.delete(id);
    }
}
