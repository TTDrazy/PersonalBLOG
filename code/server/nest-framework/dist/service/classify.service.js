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
exports.ClassifyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const classify_entity_1 = require("../models/entity/classify.entity");
let ClassifyService = class ClassifyService {
    constructor(classifyRepository) {
        this.classifyRepository = classifyRepository;
    }
    findItemChild(dataitem) {
        var arrayList = [];
        allMenu.map((item) => {
            if (item.parent == dataitem.id) {
                arrayList.push(item);
            }
        });
        return arrayList;
    }
    getAllChild(array) {
        var childList = this.findItemChild(array[0]);
        if (childList == null) {
            return [];
        }
        else {
            childList.map((item) => {
                item.children = [];
                item.children = this.getAllChild([item]);
            });
            array[0].children = childList;
        }
        return childList;
    }
    getNameInfoById(allData, lastid) {
        const info = {};
        allData.map((item) => {
            if (item.id === lastid) {
                info["name"] = item.name;
                info["lastid"] = item.lastid;
                info["id"] = item.id;
            }
        });
        return info;
    }
    getClassifyList(allData) {
        let lastId = null;
        allData.map((item) => {
            item.classifylist = [];
            lastId = item.lastid;
            while (!!lastId) {
                const data = this.getNameInfoById(allData, lastId);
                const { lastid, id } = data;
                id ? item.classifylist.unshift(id) : "";
                lastId = lastid;
            }
            item.classifylist.push(item.id);
        });
        return allData;
    }
    getChildrenTree(allData, parentId, classifyInfo) {
        const childrenList = allData.filter((item) => item.lastId == parentId);
        if (childrenList.length > 0) {
            classifyInfo.children = [];
            childrenList.map((item) => {
                this.getChildrenTree(allData, item.id, item);
            });
            classifyInfo.children = childrenList;
        }
        return classifyInfo;
    }
    getList() {
        return this.classifyRepository.find();
    }
    findOne(id) {
        return this.classifyRepository.findOne(id);
    }
    addOne(classify) {
        return this.classifyRepository.save(classify);
    }
    editOne(classify) {
        return this.classifyRepository.update(classify.id, classify);
    }
    removeById(id) {
        return this.classifyRepository.delete(id);
    }
};
ClassifyService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(classify_entity_1.default)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ClassifyService);
exports.ClassifyService = ClassifyService;
//# sourceMappingURL=classify.service.js.map