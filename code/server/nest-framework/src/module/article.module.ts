import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Article from '../models/entity/article.entity';
import { ArticleController } from '../controller/article.controller';
import { ArticleService } from '../service/article.service';
@Module({
    imports: [
        TypeOrmModule.forFeature([Article])
    ],
    controllers: [
        ArticleController
    ],
    providers: [
        ArticleService
    ],
    exports: [TypeOrmModule]
})
export class ArticleModule {

}
