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
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const classify_entity_1 = require("./classify.entity");
let Article = class Article extends base_entity_1.default {
};
__decorate([
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], Article.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], Article.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => classify_entity_1.default, (classify) => classify.articles),
    typeorm_1.JoinColumn({ name: 'classifyid' }),
    __metadata("design:type", classify_entity_1.default)
], Article.prototype, "classify", void 0);
__decorate([
    typeorm_1.Column(),
    typeorm_1.RelationId((article) => article.classify),
    __metadata("design:type", Number)
], Article.prototype, "classifyid", void 0);
__decorate([
    typeorm_1.Column('tinyint'),
    __metadata("design:type", Number)
], Article.prototype, "isshow", void 0);
__decorate([
    typeorm_1.Column('datetime'),
    __metadata("design:type", String)
], Article.prototype, "createtime", void 0);
__decorate([
    typeorm_1.Column('datetime', { default: null }),
    __metadata("design:type", String)
], Article.prototype, "edittime", void 0);
__decorate([
    typeorm_1.Column('longtext'),
    __metadata("design:type", String)
], Article.prototype, "mdtextarea", void 0);
__decorate([
    typeorm_1.Column('longtext', { default: null }),
    __metadata("design:type", String)
], Article.prototype, "mdcontent", void 0);
Article = __decorate([
    typeorm_1.Entity()
], Article);
exports.default = Article;
//# sourceMappingURL=article.entity.js.map