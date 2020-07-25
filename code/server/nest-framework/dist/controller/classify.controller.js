"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassifyController = void 0;
const common_1 = require("@nestjs/common");
const Classify_service_1 = require("../service/Classify.service");
const swagger_1 = require("@nestjs/swagger");
const Classify_entity_1 = require("../models/entity/Classify.entity");
const classify_vo_1 = require("../models/vo/classify.vo");
const add_dto_1 = require("../models/dto/classify/add.dto");
const edit_dto_1 = require("../models/dto/classify/edit.dto");
let ClassifyController = class ClassifyController {
    constructor(classifyService) {
        this.classifyService = classifyService;
    }
    async getList() {
        const classifyData = await this.classifyService.getList();
        const data = await this.classifyService.getClassifyList(classifyData);
        const ClassifyList = [];
        data.map((item) => {
            const ClassifyItem = new classify_vo_1.default(item);
            ClassifyList.push(ClassifyItem);
        });
        return ClassifyList;
    }
    async getTree() {
        const allData = [];
        const list = await this.classifyService.getList();
        list.map(item => {
            const itemModel = new classify_vo_1.default(item);
            allData.push(itemModel);
        });
        const classifyInfo = allData.filter(item => item.lastid == null)[0];
        console.log(classifyInfo);
    }
    async getOneById(id) {
        const classifyData = await this.classifyService.getList();
        const data = await this.classifyService.getClassifyList(classifyData);
        const dataList = data.filter(item => item.id == id);
        let list = [];
        if (!!dataList[0] && !!dataList[0].id) {
            list.push(new classify_vo_1.default(dataList[0]));
        }
        else {
            list = dataList;
        }
        return list;
    }
    async addOne(classify) {
        const ClassifyData = new add_dto_1.default(classify);
        const ClassifyObj = await this.classifyService.addOne(ClassifyData);
        const ClassifyInfo = new classify_vo_1.default(ClassifyObj);
        return ClassifyInfo;
    }
    async editOne(Classify) {
        const ClassifyData = new edit_dto_1.default(Classify);
        const databaseInfo = await this.classifyService.editOne(ClassifyData);
        return databaseInfo;
    }
    async removeOneById(id) {
        return await this.classifyService.removeById(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClassifyController.prototype, "getList", null);
__decorate([
    common_1.Get('tree'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClassifyController.prototype, "getTree", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClassifyController.prototype, "getOneById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClassifyController.prototype, "addOne", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClassifyController.prototype, "editOne", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClassifyController.prototype, "removeOneById", null);
ClassifyController = __decorate([
    swagger_1.ApiTags('博客类型'),
    common_1.Controller('classify'),
    __metadata("design:paramtypes", [Classify_service_1.ClassifyService])
], ClassifyController);
exports.ClassifyController = ClassifyController;
//# sourceMappingURL=classify.controller.js.map