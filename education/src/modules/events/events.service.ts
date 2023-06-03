import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Event } from "./models/event.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateEventDto } from "./dto/eventDTO";

@Injectable()
export class EventsService{
  constructor(
    @InjectRepository(Event)
    private readonly eventsRepository: Repository<Event>, // "внедряем" репозиторий Review в сервис
  ) {}

  async create(eventDTO: CreateEventDto): Promise<Event>
 {
    const event = this.eventsRepository.create(); //создаем объект Author из репозитория
    event.title = eventDTO.title;
    event.date= eventDTO.date;
    event.time = eventDTO.time;
    event.type = eventDTO.type;
    event.organisator = eventDTO.organisator;
    await this.eventsRepository.save(event); //сохраняем объект Author в БД
    return event; //возвращаем объект Author
  }
  
  async findAll(): Promise<Event[]>
  {
    const events = await this.eventsRepository.find();
    return events;
  }
  async findByDate(date:Date): Promise<Event[]>{
    const events = await this.eventsRepository.find({
      where:{date: date},
    })
    return events;
  }
  async findByType(type: string): Promise<Event[]>{
    const events = await this.eventsRepository.find({
      where:{type: type},
    })
    return events;
  }
  async update(event_id: number, updatedEvent: Event){
    const event = await this.eventsRepository.findOne({where: {event_id}});
    event.date = updatedEvent.date;
    event.organisator = updatedEvent.organisator;
    event.time = updatedEvent.time;
    event.title = updatedEvent.title;
    event.type = updatedEvent.type;
    await this.eventsRepository.save(event);
    return event;
  }
  
  remove(event_id: number){
    this.eventsRepository.delete({event_id});
  }

    
    
}