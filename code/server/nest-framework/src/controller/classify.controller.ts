import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common'
import { ClassifyService } from 'src/service/Classify.service'
import { ApiTags } from '@nestjs/swagger'
import Classify from 'src/models/entity/Classify.entity'
import ClassifyVO from 'src/models/vo/classify.vo'
import AddDTO from 'src/models/dto/classify/add.dto'
import EditDTO from 'src/models/dto/classify/edit.dto'

@ApiTags('博客类型')
@Controller('classify')
export class ClassifyController {
  constructor(private classifyService: ClassifyService) {}

  /**
   * 获取所有的 Classify 信息
   * @returns Classify 的 List 集合
   * @memberof ClassifyController
   */
  @Get()
  async getList(): Promise<ClassifyVO[]> {
    let allFaltData = []
    const allData = await this.getTree()
    const faltAllData = await this.classifyService.getFlatData(allData)
    faltAllData.map((item) => {
      const itemModel = new ClassifyVO(item)
      allFaltData.push(itemModel)
    })
    return allFaltData
  }

  /**
   * 获取 classify 的结构树
   * @returns {Promise<Classify[]>} classify 结构树
   * @memberof ClassifyController
   */
  @Get('tree')
  async getTree(): Promise<Classify[]> {
    const allData = []
    const list = await this.classifyService.getList()
    list.map((item) => {
      const itemModel = new ClassifyVO(item)
      allData.push(itemModel)
    })
    return this.classifyService.getTreeData(allData)
  }

  /**
   * 根据 Classify id 获取分类信息
   * @param {number} id
   * @returns {Promise<ClassifyVO>}
   * @memberof ClassifyController
   */
  @Get(':id')
  async getOneById(@Param() id: number): Promise<any> {
    const pureData = await this.classifyService.findOne(id)
    const allFaltData = await this.getList()
    const result = allFaltData.filter((item) => item.id === pureData.id)
    return result
  }

  /**
   * 添加一条 Classify 信息
   * @param {*} Classify 需要添加的 Classify 信息
   * @returns {Promise<ClassifyVO>} 返回数据库成功存储的 Classify VO信息
   * @memberof ClassifyController
   */
  @Post()
  async addOne(@Body() classify): Promise<ClassifyVO> {
    const ClassifyData = new AddDTO(classify)
    const ClassifyObj = await this.classifyService.addOne(ClassifyData)
    const ClassifyInfo = new ClassifyVO(ClassifyObj)
    return ClassifyInfo
  }

  /**
   * 根据 id 修改一条 Classify 消息
   * @param {*} Classify 需要修改的 Classify 信息
   * @returns 数据库存储信息
   * @memberof ClassifyController
   */
  @Put()
  async editOne(@Body() Classify) {
    const ClassifyData = new EditDTO(Classify)
    const databaseInfo = await this.classifyService.editOne(ClassifyData)
    return databaseInfo
  }

  /**
   * 根据 id 删除一条 Classify 消息
   * @param {*} id Classify ID
   * @returns 数据库存储信息
   * @memberof ClassifyController
   */
  @Delete(':id')
  async removeOneById(@Param() id) {
    return await this.classifyService.removeById(id)
  }
}
