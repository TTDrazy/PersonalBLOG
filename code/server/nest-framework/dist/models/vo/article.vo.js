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
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const article_entity_1 = require("../entity/article.entity");
const base_1 = require("../../utils/base");
class ArticleVO {
    constructor(articledata) {
        const { id, name, classifyid, isshow, createtime, edittime, mdtextarea, mdcontent, classify } = articledata;
        this.id = id;
        this.name = name;
        this.classifyId = classifyid;
        this.classifyName = classify.name;
        this.isShow = isshow ? true : false;
        this.createTime = base_1.default.transformDate(createtime);
        this.editTime = edittime ? base_1.default.transformDate(edittime) : null;
        this.mdTextarea = mdtextarea;
        this.mdContent = mdcontent;
    }
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], ArticleVO.prototype, "id", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ArticleVO.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], ArticleVO.prototype, "classifyId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Boolean)
], ArticleVO.prototype, "isShow", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], ArticleVO.prototype, "createTime", void 0);
exports.default = ArticleVO;
//# sourceMappingURL=article.vo.js.map