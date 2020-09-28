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
exports.ArticleController = void 0;
const common_1 = require("@nestjs/common");
const article_service_1 = require("../service/article.service");
const swagger_1 = require("@nestjs/swagger");
const add_dto_1 = require("../models/dto/article/add.dto");
const article_entity_1 = require("../models/entity/article.entity");
const article_vo_1 = require("../models/vo/article.vo");
const edit_dto_1 = require("../models/dto/article/edit.dto");
let ArticleController = class ArticleController {
    constructor(articleService) {
        this.articleService = articleService;
    }
    async getList() {
        const articleData = await this.articleService.getList();
        const articleList = [];
        articleData.map((item) => {
            const articleItem = new article_vo_1.default(item);
            articleList.push(articleItem);
        });
        return articleList;
    }
    async getOneById(id) {
        const articleData = await this.articleService.findOne(id);
        if (!!articleData) {
            const articleInfo = new article_vo_1.default(articleData);
            return articleInfo;
        }
    }
    async addOne(article) {
        const articleData = new add_dto_1.default(article);
        const articleObj = await this.articleService.addOne(articleData);
        const articleInfo = new article_vo_1.default(articleObj);
        return articleInfo;
    }
    async editOne(article) {
        const articleData = new edit_dto_1.default(article);
        const databaseInfo = await this.articleService.editOne(articleData);
        return databaseInfo;
    }
    async removeOneById(id) {
        return await this.articleService.removeById(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getList", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getOneById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "addOne", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "editOne", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "removeOneById", null);
ArticleController = __decorate([
    swagger_1.ApiTags('博客类型'),
    common_1.Controller('article'),
    __metadata("design:paramtypes", [article_service_1.ArticleService])
], ArticleController);
exports.ArticleController = ArticleController;
//# sourceMappingURL=article.controller.js.map