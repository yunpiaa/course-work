import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { FormsController } from './forms.controller';
import { FormsService } from './forms.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from 'src/modules/reviews/models/review.entity';
import { Form } from './models/form.entity';

@Module({
  controllers: [FormsController], //инверсия зависимостей
  providers: [FormsService],
  imports:[
    DatasourceModule,
    TypeOrmModule.forFeature([Review, Form]) 
  ],
})
export class FormsModule {}
