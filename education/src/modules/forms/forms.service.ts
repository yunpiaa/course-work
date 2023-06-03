import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Form } from "./models/form.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateFormDto } from "./dto/formDTO";

@Injectable()
export class FormsService{
  constructor(
    @InjectRepository(Form)
    private readonly formsRepository: Repository<Form>, // "внедряем" репозиторий Review в сервис
  ) {}
    async create(formDTO: CreateFormDto): Promise<Form>{
      const form = this.formsRepository.create();
      form.first_name=formDTO.first_name;
      form.last_name=formDTO.last_name;
      form.email=formDTO.email;
      form.phone=formDTO.phone;
      form.date=formDTO.date;
      form.ticket_type=formDTO.ticket_type;
      await this.formsRepository.save(form);
      return form;
    }
    async findAll(): Promise<Form[]>{
      const forms= await this.formsRepository.find();
      return forms;
    }
    async findOne(form_id: number):Promise<Form>{
      const form = await this.formsRepository.findOne({
        where:{form_id}
      })
      return form;
    }
    async update(form_id: number, updatedForm: Form){
      const form = await this.formsRepository.findOne({where:{form_id}})
      form.date=updatedForm.date;
      form.email=updatedForm.email;
      form.first_name=updatedForm.first_name;
      form.last_name=updatedForm.last_name;
      form.phone=updatedForm.phone;
      form.ticket_type=updatedForm.ticket_type;
      await this.formsRepository.save(form);
      return form;
    }

    remove (form_id:number){
      this.formsRepository.delete({form_id});
    }
}