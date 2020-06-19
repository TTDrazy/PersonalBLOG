import Axios from "axios";
export default class ClassifyAPI {
    /**
     * 获取 Classify 的树层级信息
     *
     * @memberof ClassifyAPI
     */
    getTree = async () => {
        let response = await Axios.get("http://localhost:8080/classify/tree");
        return response;
    };
    /**
     * 根据 Classify-id 获取该条 Classify 信息
     * @param id - Classify-id
     * @memberof ClassifyAPI
     */
    getById = async (id) => {
        let response = await Axios.get(`http://localhost:8080/classify/${id}`);
        return response;
    };
}
