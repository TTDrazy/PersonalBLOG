import dbHelper from "../dataBase/modules/DBHelper";
import ClassifySQL from "../dataBase/sql/ClassifySQL";

class ClassifyService {
    getAll = async () => {
        let result;
        let lastId = null;
        //let allData = await new dbHelper().query(ClassifySQL.qeuryAll());
        let allData = [{id:1,name:'name1',lastid:null},{id:2,name:'name2',lastid:1},{id:3,name:'name3',lastid:2}];
        result = allData.map((item) => {
            item.classifyList = [];
            lastId = item.lastid;
            while (!!lastId) {
                let data = this.getClassifyById(lastId);
                let { name, lastid } = data;
                item.classifyList.push(name);
                lastId = lastid;
            }
        });
        //console.log(xx);
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
