import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { PaintingsController } from './paintings.controller';
import { PaintingsService } from './paintings.service';
import { Painting } from './models/painting.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artist } from 'src/modules/artists/models/artist.entity';


@Module({
  controllers: [PaintingsController],
  providers: [PaintingsService],
  imports: [DatasourceModule, 
    TypeOrmModule.forFeature([Artist, Painting])],
  
})
export class PaintingsModule {}
