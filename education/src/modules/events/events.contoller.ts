import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Event } from "./models/event.entity";
import { EventsService } from "./events.service";
import { ApiTags } from "@nestjs/swagger";

@Controller('events')
@ApiTags('Мероприятия')
export class EventsController{
    constructor(private readonly eventsService: EventsService) {}
    @Get()
  findAll() {
    return this.eventsService.findAll();
  }
  @Get(':type')
  findType(@Param('type') type: string) {
    return this.eventsService.findByType(type);
  }
  @Get(':date')
  findDate(@Param('date') date: Date) {
    return this.eventsService.findByDate(date);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updatedEvent: Event) {
    return this.eventsService.update(+id, updatedEvent);
  }

  @Post()
  create(@Body() createEvent: Event) {
    return this.eventsService.create(createEvent);
  }
  @Delete(':event_id')
  remove(@Param('event_id') event_id: string) {
    return this.eventsService.remove(+event_id);
  }
    
}