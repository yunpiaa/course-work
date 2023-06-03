import { Module } from "@nestjs/common";
import { ArtistsService } from "./artists.service";
import { DatasourceModule } from "src/datasource/datasource.module";
import { Artist } from "./models/artist.entity";
import { ArtistsController } from "./artists.contoller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Painting } from "src/modules/paintings/models/painting.entity";

@Module({
  controllers: [ArtistsController],
  providers: [ArtistsService],
  imports: [DatasourceModule, 
    TypeOrmModule.forFeature([Artist, Painting])],
  
})
export class ArtistsModule {}