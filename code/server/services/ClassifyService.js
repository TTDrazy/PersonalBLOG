import dbHelper from "../dataBase/modules/DBHelper";
import ClassifySQL from "../dataBase/sql/ClassifySQL";

class ClassifyService {
    getNameInfoById = (allData, lastid) => {
        let info = {};
        allData.map((item) => {
            if (item.id === lastid) {
                info["name"] = item.name;
                info["lastid"] = item.lastid;
            }
        });
        return info;
    };
    getClassifyList = (allData) => {
        let lastId = null;
        allData.map((item) => {
            item.classifylist = [];
            lastId = item.lastid;
            while (!!lastId) {
                let data = this.getNameInfoById(allData, lastId);
                let { name, lastid } = data;
                item.classifylist.unshift(name);
                lastId = lastid;
            }
            item.classifylist.push(item.name);
        });
        return allData;
    };
    getAll = () => {
        let result = new dbHelper().query(ClassifySQL.qeuryAll());
        return result;
    };
    getClassifyById = (id) => {
        let result = new dbHelper().query(ClassifySQL.getById(id));
        return result;
    };
    addClassify = (classifyData) => {
        let result = new dbHelper().query(ClassifySQL.add(classifyData));
        return result;
    };
    editClassify = (classifyData) => {
        let result = new dbHelper().query(ClassifySQL.edit(classifyData));
        return result;
    };
    removeClassify = (id) => {
        let result = new dbHelper().query(ClassifySQL.removeById(id));
        return result;
    };
}

export default ClassifyService;
