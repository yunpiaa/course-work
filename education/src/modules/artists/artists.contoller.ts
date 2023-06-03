import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Artist } from "./models/artist.entity";
import { ArtistsService } from "./artists.service";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@Controller('artists')
@ApiTags('Художники')
export class ArtistsController{
  constructor(private readonly artistsService: ArtistsService) {}
  @Get()
  findAll() {
    return this.artistsService.findAll();
  }
  @Get(':artist_name')
  findName(@Param('artist_name') artist_name: string) {
    return this.artistsService.findName(artist_name);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateArtist: Artist) {
    return this.artistsService.update(+id, updateArtist);
  }
  
@ApiOperation({summary:'Создание художника'})
  @Post()
  create(@Body() createArtist: Artist) {
    return this.artistsService.create(createArtist);
  }
  @Delete(':artist_id')
  remove(@Param('artist_id') artist_id: string) {
    return this.artistsService.remove(+artist_id);
  }
    
}