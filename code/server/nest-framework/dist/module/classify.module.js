"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassifyModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const classify_entity_1 = require("../models/entity/classify.entity");
const classify_service_1 = require("../service/classify.service");
const classify_controller_1 = require("../controller/classify.controller");
let ClassifyModule = class ClassifyModule {
};
ClassifyModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([classify_entity_1.default])
        ],
        controllers: [
            classify_controller_1.ClassifyController
        ],
        providers: [
            classify_service_1.ClassifyService
        ],
        exports: [typeorm_1.TypeOrmModule]
    })
], ClassifyModule);
exports.ClassifyModule = ClassifyModule;
//# sourceMappingURL=classify.module.js.map