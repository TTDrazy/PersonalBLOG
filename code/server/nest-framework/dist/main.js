"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transform_interceptor_1 = require("./interceptor/transform.interceptor");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const options = new swagger_1.DocumentBuilder()
        .setTitle('博客案例')
        .setDescription('博客类型')
        .setVersion('1.3')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalInterceptors(new transform_interceptor_1.TransformInterceptor());
    await app.listen(8080);
}
bootstrap();
//# sourceMappingURL=main.js.map