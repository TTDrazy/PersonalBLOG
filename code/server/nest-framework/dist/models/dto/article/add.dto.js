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
const silly_datetime_1 = require("silly-datetime");
class AddDTO {
    constructor({ name = '标题', classifyId = 1, isShow = 1, mdTextarea, mdContent }) {
        this.name = name;
        this.classifyid = classifyId;
        this.isshow = isShow ? 1 : 0;
        this.mdtextarea = mdTextarea;
        this.mdcontent = mdContent ? mdContent : '';
        this.createtime = silly_datetime_1.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
    }
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], AddDTO.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], AddDTO.prototype, "classifyid", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], AddDTO.prototype, "isshow", void 0);
exports.default = AddDTO;
//# sourceMappingURL=add.dto.js.map