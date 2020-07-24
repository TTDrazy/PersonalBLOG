import dbHelper from "../dataBase/modules/DBHelper";
import ClassifySQL from "../dataBase/sql/ClassifySQL";

/**
 * classify 的 service 层
 * @class ClassifyService
 */
class ClassifyService {
    /**
     * 通过 lastid 得到 父级的 name 及 lastid 信息
     * @param {array} allData - 所有的 classify 数据
     * @param {number} lastid - 单条 classify 的父级 id
     * @return {object} 单条 classify 父级的 name 及 lastid 信息
     * @memberof ClassifyService
     */
    getNameInfoById = (allData, lastid) => {
        let info = {};
        allData.map((item) => {
            if (item.id === lastid) {
                info["name"] = item.name;
                info["lastid"] = item.lastid;
                info["id"] = item.id;
            }
        });
        return info;
    };
    /**
     * 通过调用 getNameInfoById 方法使所有的 classify 数据都增加了一项 classifyList 代表层级关系的数组
     * @param {array} allData - 所有的 classify 数据
     * @return {array} 所有被包含了 classifyList 的数据，即 getNameInfoById 返回的 info 的聚合
     * @memberof ClassifyService
     */
    getClassifyList = (allData) => {
        let lastId = null;
        allData.map((item) => {
            item.classifylist = [];
            lastId = item.lastid;
            while (!!lastId) {
                let data = this.getNameInfoById(allData, lastId);
                let { name, lastid,id } = data;
                //lastid?item.classifylist.unshift(lastid):'';
                id?item.classifylist.unshift(id):'';
                lastId = lastid;
            }
            item.classifylist.push(item.id);
        });
        return allData;
    };
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
    getChildrenTree(allData, parentId, classifyInfo) {
        let childrenList = allData.filter((item) => item.lastId == parentId);
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
     * 获取所有的 classify
     * @return {promise} 包含查询所有 classify 的 Promise
     * @memberof ClassifyService
     */
    getAll = () => {
        let result = new dbHelper().query(ClassifySQL.qeuryAll());
        return result;
    };
    /**
     * 通过 classify 的 id 获取此条 classify
     * @param {number} id - classify 的 id
     * @return {promise} 包含查询该条 classify 的 Promise
     * @memberof ClassifyService
     */
    getClassifyById = (id) => {
        let result = new dbHelper().query(ClassifySQL.getById(id));
        return result;
    };
    /**
     * 添加 classifyData 的数据进入数据库
     * @param {object} classifyData - 包含有 name, lastid, isshow, createtime 的 classify AddDTO 对象
     * @return {promise} 包含添加该条 classify 结果的 Promise
     * @memberof ClassifyService
     */
    addClassify = (classifyData) => {
        let result = new dbHelper().query(ClassifySQL.add(classifyData));
        return result;
    };
    /**
     * 在数据库中修改 id 为 classifyData.id 的 classify 的数据
     * @param {object} classifyData - 包含有 id, name, lastid, isshow, edittime  的 classify EditDTO 对象
     * @return {promise} 包含修改该条 classify 结果的 Promise
     * @memberof ClassifyService
     */
    editClassify = (classifyData) => {
        let result = new dbHelper().query(ClassifySQL.edit(classifyData));
        return result;
    };
    /**
     * 通过 classify 的 id 删除此条 classify
     * @param {number} id - classify 的 id
     * @return {promise} 包含删除该条 classify 的 Promise
     * @memberof ClassifyService
     */
    removeClassify = (id) => {
        let result = new dbHelper().query(ClassifySQL.removeById(id));
        return result;
    };
}

export default ClassifyService;
