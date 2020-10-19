import ClassifyApi from '@/api/classify/ClassifyApi'
import ClassifyTreeVO from '@/models/admin/classify/ClassifyTreeVO'

export default class ClassifyService {
  constructor() {
    this.classifyApi = new ClassifyApi()
  }
  /**
   * 获取所有 Classify 的 Tree 展示信息
   * @memberof ClassifyService
   */
  async getClassifyTree() {
    return new Promise((resolve) => {
      this.classifyApi.getTree().then((response) => {
        let { statusCode, data } = response.data
        if (statusCode === 0 && data !== undefined) {
          let classifyTree = []
          data.map((item) => {
            classifyTree.push(new ClassifyTreeVO(item))
          })
          resolve(classifyTree)
        }
      })
    })
  }
}
