import dbHelper from "../dataBase/modules/DBHelper";
import ClassifySQL from "../dataBase/sql/ClassifySQL";

class ClassifyService {
    getClassifyList = ()=>{

    };
    getAll = () => {
        let result;
        let allData = new dbHelper().query(ClassifySQL.qeuryAll());
        
        return allData;
    };
    getArticleById = (id) => {
        let result = new dbHelper().query(ClassifySQL.getById(id));
        return result;
    };
    addArticle = (classifyData) => {
        let result = new dbHelper().query(ClassifySQL.add(classifyData));
        return result;
    };
    editArticle = (classifyData) => {
        let result = new dbHelper().query(ClassifySQL.edit(classifyData));
        return result;
    };
    removeArticle = (id) => {
        let result = new dbHelper().query(ClassifySQL.removeById(id));
        return result;
    };
}

export default ClassifyService;
