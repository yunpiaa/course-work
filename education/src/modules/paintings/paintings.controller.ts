
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Painting } from './models/painting.entity';
import { PaintingsService } from './paintings.service';
import { CreatePaintingDto } from './dto/paintingDTO';
import { ApiTags } from '@nestjs/swagger';


@Controller('paintings')
@ApiTags('Картины')
export class PaintingsController {
  constructor(private readonly paintingsService: PaintingsService) { }
  @Get()
  findAll() {
    return this.paintingsService.findAll();
  }
  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.paintingsService.findName(name);
  }
  @Get(':artist')
  findByArtist(@Param('artist') artist: number) {
    return this.paintingsService.findByArtist(artist);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updatePainting: Painting) {
    return this.paintingsService.update(+id, updatePainting);
  }

  @Post()
  create(@Body() createPainting: Painting) {
    return this.paintingsService.create(createPainting);
  }
  @Delete(':painting_id')
  remove(@Param('painting_id') painting_id: string) {
    return this.paintingsService.remove(+painting_id);
  }
  @Get ('incomplete')
  findIncomplete(){
    this.paintingsService.findIncomplete();
  }

}
