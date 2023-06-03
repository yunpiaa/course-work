import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Form } from "./models/form.entity";
import { FormsService } from "./forms.service";
import { ApiTags } from "@nestjs/swagger";

@Controller('forms')
@ApiTags('Форма покупки билета')
export class FormsController{
    constructor(private readonly formsService: FormsService) {}
    @Get()
  findAll() {
    return this.formsService.findAll();
  }
  @Get(':form_id')
  findOne(@Param('form_id') form_id: string) {
    return this.formsService.findOne(+form_id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateForm: Form) {
    return this.formsService.update(+id, updateForm);
  }
  @Post()
  create(@Body() createForm: Form) {
    return this.formsService.create(createForm);
  }
  @Delete(':form_id')
  remove(@Param('form_id') form_id: string) {
    return this.formsService.remove(+form_id);
  }
    
}