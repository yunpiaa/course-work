import { DatasourceModule } from "src/datasource/datasource.module";
import { EventsController } from "./events.contoller";
import { EventsService } from "./events.service";
import { Event } from "./models/event.entity";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  controllers: [EventsController],
  providers: [EventsService],
  imports: [DatasourceModule, 
  TypeOrmModule.forFeature([Event])],
})
export class EventsModule {}