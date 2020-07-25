import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ClassifyService } from 'src/service/Classify.service';
import { ApiTags } from '@nestjs/swagger';
import Classify from 'src/models/entity/Classify.entity';
import ClassifyVO from 'src/models/vo/classify.vo';
import AddDTO from 'src/models/dto/classify/add.dto';
import EditDTO from 'src/models/dto/classify/edit.dto';

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
    const classifyData = await this.classifyService.getList();
    const data = await this.classifyService.getClassifyList(classifyData);
    const ClassifyList = [];
    data.map((item: Classify) => {
      const ClassifyItem = new ClassifyVO(item);
      ClassifyList.push(ClassifyItem);
    });
    return ClassifyList;
  }

  /**
   * 获取 classify 的结构树
   * @returns {Promise<any>} classify 结构树
   * @memberof ClassifyController
   */
  @Get('tree')
  async getTree(): Promise<any> {
    const allData = [];
    const list = await this.classifyService.getList();
    list.map(item => {
      const itemModel = new ClassifyVO(item);
      allData.push(itemModel);
    });
    const classifyInfo = allData.filter(item => item.lastid == null)[0];
    console.log(classifyInfo);
    // const data = [
    //   await this.classifyService.getChildrenTree(
    //     allData,
    //     classifyInfo.id,
    //     classifyInfo,
    //   ),
    // ];
    // return data;
  }

  /**
   * 根据 Classify id 获取文章信息
   * @param {number} id
   * @returns {Promise<ClassifyVO>}
   * @memberof ClassifyController
   */
  @Get(':id')
  async getOneById(@Param() id: number): Promise<any> {
    const classifyData = await this.classifyService.getList();
    const data = await this.classifyService.getClassifyList(classifyData);
    const dataList = data.filter(item => item.id == id);
    let list = [];
    if (!!dataList[0] && !!dataList[0].id) {
      list.push(new ClassifyVO(dataList[0]));
    } else {
      list = dataList;
    }
    return list;
  }

  /**
   * 添加一条 Classify 信息
   * @param {*} Classify 需要添加的 Classify 信息
   * @returns {Promise<ClassifyVO>} 返回数据库成功存储的 Classify VO信息
   * @memberof ClassifyController
   */
  @Post()
  async addOne(@Body() classify): Promise<ClassifyVO> {
    const ClassifyData = new AddDTO(classify);
    const ClassifyObj = await this.classifyService.addOne(ClassifyData);
    const ClassifyInfo = new ClassifyVO(ClassifyObj);
    return ClassifyInfo;
  }

  /**
   * 根据 id 修改一条 Classify 消息
   * @param {*} Classify 需要修改的 Classify 信息
   * @returns 数据库存储信息
   * @memberof ClassifyController
   */
  @Put()
  async editOne(@Body() Classify) {
    const ClassifyData = new EditDTO(Classify);
    const databaseInfo = await this.classifyService.editOne(ClassifyData);
    return databaseInfo;
  }

  /**
   * 根据 id 删除一条 Classify 消息
   * @param {*} id Classify ID
   * @returns 数据库存储信息
   * @memberof ClassifyController
   */
  @Delete(':id')
  async removeOneById(@Param() id) {
    return await this.classifyService.removeById(id);
  }
}
