import { Module } from '@nestjs/common';
import { DatasourceModule } from './datasource/datasource.module';
import { FormsModule } from './modules/forms/forms.module';
import { PaintingsModule } from './modules/paintings/painting.module';
import { ReviewsModule } from './modules/reviews/reviews.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsModule } from './modules/events/events.module';
import { ArtistsModule } from './modules/artists/artists.module';

@Module({
  imports: [
    DatasourceModule, 
    FormsModule, 
    PaintingsModule,
    ReviewsModule,
    ArtistsModule,
    EventsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      database: 'postgres',
      username: 'postgres',
      password: 'password',
      host: 'localhost',
      synchronize: false, //отключаем автосинхронизацию(в противном случае при каждом перезапуске наша БД будет создаваться заново)
      logging: 'all', //включим логирование для удобства отслеживания процессов
	  entities: ['dist/**/*.entity{.ts,.js}'], //указываем путь к сущностям
    }),
  ],

  controllers: [],
  providers: [],
  
})
export class AppModule {}

