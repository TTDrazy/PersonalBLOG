import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Classify from 'src/models/entity/classify.entity';
import { ClassifyService } from 'src/service/classify.service';
import { ClassifyController } from 'src/controller/classify.controller';


@Module({
    imports: [
        TypeOrmModule.forFeature([Classify])
    ],
    controllers: [
        ClassifyController
    ],
    providers: [
        ClassifyService
    ],
    exports: [TypeOrmModule]
})
export class ClassifyModule {

}
