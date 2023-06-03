import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Review } from "./models/review.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Form } from "src/modules/forms/models/form.entity";
import { Repository } from "typeorm";
import { IncompleteReviewDto } from "./dto/incomplete-review.dto";
import { CreateReviewDto } from "./dto/reviewDTO";

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>, // "внедряем" репозиторий Review в сервис
    // @InjectRepository(Form)
    // private readonly formRepository: Repository<Form>, // "внедряем" репозиторий Form в сервис
  ) {}

  async create(reviewDTO: CreateReviewDto): Promise<Review>
 {
    //получаем объект CreateAuthorDto
    const review = this.reviewRepository.create(); //создаем объект Author из репозитория
    review.email = reviewDTO.email;
    review.title = reviewDTO.title;
    review.date_of_visit = reviewDTO.date_of_visit;
    review.image = reviewDTO.image;
    review.post = reviewDTO.post;
    await this.reviewRepository.save(review); //сохраняем объект Author в БД
    return review; //возвращаем объект Author
  }

  async findAll(): Promise<Review[]> {
    const reviews = await this.reviewRepository.find(); //получаем массив Review из БД
    return reviews; //возвращаем массив reviews
  }

  async findIncomplete(): Promise<IncompleteReviewDto[]> {
    const reviews = await this.reviewRepository.find(); //получаем массив Author из БД
    const incompleteReview: IncompleteReviewDto[] = reviews.map((review) => {
      //преобразуем массив Author в массив IncompleteAuthorDto
      const incompleteReview = new IncompleteReviewDto();
      incompleteReview.review_id = review.review_id;
      incompleteReview.title = review.title;
      incompleteReview.date_of_visit = review.date_of_visit;
      incompleteReview.short_post = review.post;
      return incompleteReview;
    });
    return incompleteReview; //возвращаем массив IncompleteAuthorDto
  }

  async update(review_id: number, updatedReview: Review) {
    //получаем объект Author для обновления по review_id
    const review = await this.reviewRepository.findOne({ where: { review_id } }); //получаем объект Author по review_id из БД
    review.email = updatedReview.email; //обновляем поля объекта Author
    review.title = updatedReview.title;
    review.date_of_visit = updatedReview.date_of_visit;
    review.image = updatedReview.image;
    review.post = updatedReview.post;
    review.forms= updatedReview.forms;
    await this.reviewRepository.save(review); //сохраняем объект Author в БД
    return review; //возвращаем объект Author
  }

  remove(review_id: number) {
    this.reviewRepository.delete({ review_id }); //удаляем объект Author из БД
  }

}
