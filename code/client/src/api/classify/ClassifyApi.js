import Axios from '../../utils/axios/AxiosHelper'

const commonRoot = '/classify'

class ClassifyApi {
  /**
   * 获取所有的 Classify 信息
   *
   * @memberof ClassifyApi
   */
  getAll = async () => {
    let response = await Axios.get(commonRoot)
    return response
  }

  /**
   * 获取树形结构所有的 Classify 信息
   * 
   * @memberof ClassifyApi
   */
  getTree = async () => {
    let response = await Axios.get(`${commonRoot}/tree`)
    return response
  }
  /**
   * 根据 Classify-id 获取该条 Classify 信息
   * @param id - Classify-id
   * @memberof ClassifyApi
   */
  getById = async (id) => {
    let response = await Axios.get(`${commonRoot}/${id}`)
    return response
  }
  /**
   * 新增一条 Classify 信息
   *
   * 包含有 id, name, classifyId, isShow, mdTextarea, mdContent  的 classifyAddDTO 对象
   *
   * @memberof ClassifyApi
   */
  addClassify = async (classifyAddDTO) => {
    let response = await Axios.post(commonRoot, classifyAddDTO)
    return response
  }
  /**
   * 修改该条 Classify 信息
   *
   * 包含有 id, name, classifyId, isShow, mdTextarea, mdContent  的 classifyEditDTO 对象
   *
   * @memberof ClassifyApi
   */
  editClassify = async (classifyEditDTO) => {
    let response = await Axios.put(commonRoot, classifyEditDTO)
    return response
  }
  /**
   * 根据 Classify-id 删除该条 Classify 信息
   * @param id - Classify-id
   * @memberof ClassifyApi
   */
  removeById = async (id) => {
    let response = await Axios.delete(`${commonRoot}/${id}`)
    return response
  }
}

export default ClassifyApi
