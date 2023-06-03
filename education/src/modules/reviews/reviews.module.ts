import { Module } from "@nestjs/common";
import { Review } from "./models/review.entity";
import { ReviewsController } from "./reviews.controller";
import { ReviewsService } from "./reviews.service";
import { DatasourceModule } from "src/datasource/datasource.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Form } from "src/modules/forms/models/form.entity";

@Module({
    controllers:[ReviewsController],
    providers:[ReviewsService],
    imports:[
        DatasourceModule,
        TypeOrmModule.forFeature([Review, Form])
    ],
})
export class ReviewsModule{}