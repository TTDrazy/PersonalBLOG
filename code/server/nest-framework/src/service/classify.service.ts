import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import Classify from 'src/models/entity/classify.entity'

@Injectable()
export class ClassifyService {
  constructor(
    @InjectRepository(Classify)
    private classifyRepository: Repository<Classify>
  ) {}

  /**
   * 通过递归调用返回了 classify 的层级树结构
   * 1. 克隆原数据 allData
   * 2. 在外层对所有数据进行遍历筛选
   * 3. 在内层对所有数据进行再次的遍历筛选
   * 4. 如果内层没有就将外层筛选条件归到初始状态
   * @param {array} allData - 所有的 classify 数据
   * @return {array} 所有 classify 的层级树结构
   * @memberof ClassifyService
   */
  public getTreeData = (allData) => {
    let cloneData = JSON.parse(JSON.stringify(allData)) // 对源数据深度克隆
    return cloneData.filter((father) => {
      let branchArr = cloneData.filter((child) => father.id == child.lastId) //返回每一项的子级数组
      branchArr.length > 0 ? (father.children = branchArr) : '' //如果存在子级，则给父级添加一个children属性，并赋值
      return father.lastId == null //返回第一层
    })
  }
  /**
   * @param {array} allData - 所有的 classify 树形数据
   * @return {array} 所有 classify 的扁平化结构
   * @memberof ClassifyService
   */
  public getFlatData = (allData) => {
    let result = []
    const faltFunction = (source) => {
      source.forEach((el) => {
        result.push(el)
        el.children && el.children.length > 0 ? faltFunction(el.children) : ''
      })
    }
    faltFunction(allData)
    return result
  }

  /**
   * 获取所有 Classify 信息
   * @returns {Promise<Classify[]>} 所有 Classify 信息并形成数组
   * @memberof ClassifyService
   */
  public getList(): Promise<Classify[]> {
    return this.classifyRepository.find()
  }

  /**
   * 根据 Classify Id 获取一条 Classify 信息
   * @param {number} id Classify Id
   * @returns {Promise<Classify>} Classify 信息
   * @memberof ClassifyService
   */
  public findOne(id: number): Promise<Classify> {
    return this.classifyRepository.findOne(id)
  }

  /**
   * 添加一条 Classify 信息
   * @param {*} classify 传过来的经过规范的 Classify AddDTO 模型
   * @returns {Promise<Classify>} 未经过规范的此条 Classify 存储 VO 模型
   * @memberof ClassifyService
   */
  public addOne(classify): Promise<Classify> {
    return this.classifyRepository.save(classify)
  }

  /**
   * 根据 id 修改一条 Classify 信息
   * @param {*} classify 传过来的经过规范的 Classify EditDTO 模型
   * @returns {*} 数据库存储信息
   * @memberof ClassifyService
   */
  public editOne(classify): any {
    return this.classifyRepository.update(classify.id, classify)
  }

  /**
   * 根据 id 删除一条 Classify 信息
   * @param {number} id Classify ID
   * @returns {*} 数据库存储信息
   * @memberof ClassifyService
   */
  public removeById(id: number): any {
    return this.classifyRepository.delete(id)
  }
}
