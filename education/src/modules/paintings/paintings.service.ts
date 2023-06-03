import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { InjectRepository } from "@nestjs/typeorm";
import { Like, Repository } from "typeorm";
import { Painting } from "./models/painting.entity";
import { CreatePaintingDto } from "./dto/paintingDTO"
import { IncompletePaintingDto } from "./dto/incomplete-painting.dto";

@Injectable()
export class PaintingsService {
  constructor(
    @InjectRepository(Painting) // пример внедрение зависимостей
    private readonly paintingRepository: Repository<Painting>, // "внедряем" репозиторий Review в сервис
  ) {}

  async create(paintingDTO: CreatePaintingDto): Promise<Painting>
 {
    const painting = this.paintingRepository.create(); //создаем объект Author из репозитория
    painting.name = paintingDTO.name;
    painting.date = paintingDTO.date;
    painting.desc= paintingDTO.desc;
    painting.dim = paintingDTO.dim;
    painting.image = paintingDTO.image;
    painting.artist= paintingDTO.artist;
    await this.paintingRepository.save(painting); //сохраняем объект Author в БД
    return painting; //возвращаем объект Author
  }

  async findAll(): Promise<Painting[]> {
    const paintings = await this.paintingRepository.find(); 
    return paintings; 
  }
  async findByArtist(search: number): Promise<Painting[]> {
    const paintings = await this.paintingRepository.find({
      where:{artist: Like(search) }
    }); 
    return paintings; 
  }

  async findName(name: string): Promise<Painting[]> {
    // Promise<Artist> - указывает, что функция возвращает объект Author в виде Promise (c асинхронного потока)
    const paintings = await this.paintingRepository.find({
      //получаем объект Author по painting_id
      where: { name: Like('%${name}%') }, //указываем условие поиска по name
    });
    return paintings;
  }
  

  async findIncomplete(): Promise<IncompletePaintingDto[]> {
    const paintings = await this.paintingRepository.find(); //получаем массив Author из БД
    const incompletePaintning: IncompletePaintingDto[] = paintings.map((painting) => {
      //преобразуем массив Author в массив IncompleteAuthorDto
      const incompletePaitning = new IncompletePaintingDto();
      // incompleteReview.painting_id = review.painting_id;
      return incompletePaitning;
    });
    return incompletePaintning; //возвращаем массив IncompleteAuthorDto
  }

  async update(painting_id: number, updatedPainting: Painting) {
    //получаем объект Author для обновления по painting_id
    const painting = await this.paintingRepository.findOne({ where: { painting_id } }); //получаем объект Author по painting_id из БД
    painting.name = updatedPainting.name;
    painting.artist = updatedPainting.artist;
    painting.date = updatedPainting.date;
    painting.desc = updatedPainting.desc;
    painting.dim = updatedPainting.dim;
    painting.image = updatedPainting.image;
    await this.paintingRepository.save(painting); //сохраняем объект Author в БД
    return painting; //возвращаем объект Author
  }

  remove(painting_id: number) {
    this.paintingRepository.delete({ painting_id }); //удаляем объект Author из БД
  }







}
