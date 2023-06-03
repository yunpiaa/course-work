import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Artist } from "./models/artist.entity";
import { Like, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateArtistDto } from "./dto/artistDTO";

@Injectable()
export class ArtistsService{
    constructor(
        @InjectRepository(Artist)
        private readonly artistRepository: Repository<Artist>, // "внедряем" репозиторий Review в сервис
      ) {}
    async create(artistDTO: CreateArtistDto): Promise<Artist>
      {
         //получаем объект CreateAuthorDto
         const artist = this.artistRepository.create(); //создаем объект Author из репозитория
         artist.name = artistDTO.name;
         artist.birth= artistDTO.birth;
         artist.death = artistDTO.death;
         artist.country = artistDTO.country;
         artist.style = artistDTO.style;
         artist.bio = artistDTO.bio;
         await this.artistRepository.save(artist); //сохраняем объект Author в БД
         return artist; //возвращаем объект Author
       }

    async findName(name: string): Promise<Artist> {
        // Promise<Artist> - указывает, что функция возвращает объект Author в виде Promise (c асинхронного потока)
        return this.artistRepository.findOne({
          //получаем объект Author по painting_id
          where: { name: Like('%${name}%') }, //указываем условие поиска по name
        });
      }
    

    async findAll(): Promise<Artist[]> {
        const artists = await this.artistRepository.find(); //получаем массив Review из БД
        return artists; //возвращаем массив reviews
    }

    // async findIncomplete(): Promise<IncompleteReviewDto[]> {
    //     const reviews = await this.reviewRepository.find(); //получаем массив Author из БД
    //     const incompleteReview: IncompleteReviewDto[] = reviews.map((review) => {
    //     //преобразуем массив Author в массив IncompleteAuthorDto
    //     const incompleteReview = new IncompleteReviewDto();
    //     incompleteReview.review_id = review.review_id;
    //     incompleteReview.title = review.title;
    //     incompleteReview.date_of_visit = review.date_of_visit;
    //     incompleteReview.short_post = review.post;
    //     return incompleteReview;
    //     });
    //     return incompleteReview; //возвращаем массив IncompleteAuthorDto
    // }

    async update(artist_id: number, updatedArtist: Artist) {
        //получаем объект Author для обновления по review_id
        const artist = await this.artistRepository.findOne({ where: { artist_id } }); //получаем объект Author по review_id из БД
        artist.name = updatedArtist.name;
        artist.birth = updatedArtist.birth;
        artist.death = updatedArtist.death;
        artist.country = updatedArtist.country;
        artist.style = updatedArtist.style;
        artist.bio = updatedArtist.bio;
        await this.artistRepository.save(artist); //сохраняем объект Author в БД
        return artist; //возвращаем объект Author
    }

    remove(artist_id: number) {
        this.artistRepository.delete({ artist_id }); //удаляем объект Author из БД
    }
}