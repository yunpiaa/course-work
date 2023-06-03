import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Review } from "./models/review.entity";

@Injectable()
export class ReviewsService {
    constructor(private readonly datasourceService: DatasourceService) { }
    create(review: Review) {
        this.datasourceService.getReviews().push(review);
        return review;
    }
    findOne(review_id: number) {
        return this.datasourceService
          .getReviews()
          .find((review) => review.review_id === review_id);
    }
    findAll(): Review[] {
        return this.datasourceService.getReviews();
      }
    update(review_id: number, updatedReview: Review) {
        const index = this.datasourceService
          .getReviews()
          .findIndex((review) => review.review_id === review_id);
        this.datasourceService.getReviews()[index] = updatedReview;
        return this.datasourceService.getReviews()[index];
      }
    
    remove(review_id: number) {
        const index = this.datasourceService
          .getReviews()
          .findIndex((review) => review.review_id === review_id);
        this.datasourceService.getReviews().splice(index, 1);
        return HttpStatus.OK;
      }
        
}