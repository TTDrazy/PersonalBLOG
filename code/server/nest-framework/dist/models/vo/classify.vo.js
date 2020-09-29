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
Object.defineProperty(exports, "__esModule", { value: true });
const classify_entity_1 = require("../entity/classify.entity");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const base_1 = require("../../utils/base");
class ClassifyVO {
    constructor({ id, name, lastid, isshow, createtime, edittime, children = [] }) {
        this.id = id;
        this.name = name;
        this.lastId = lastid;
        this.isShow = isshow ? true : false;
        this.createTime = base_1.default.transformDate(createtime);
        this.editTime = edittime ? base_1.default.transformDate(edittime) : null;
        this.children = children;
    }
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], ClassifyVO.prototype, "id", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ClassifyVO.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Boolean)
], ClassifyVO.prototype, "isShow", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], ClassifyVO.prototype, "createTime", void 0);
exports.default = ClassifyVO;
//# sourceMappingURL=classify.vo.js.map