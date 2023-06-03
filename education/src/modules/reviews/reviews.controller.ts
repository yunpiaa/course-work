import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Review } from "./models/review.entity";
import { ReviewsService } from "./reviews.service";
import { ApiTags } from "@nestjs/swagger";


@Controller('reviews')
@ApiTags('Отзывы')
export class ReviewsController{
    constructor(private readonly reviewsService: ReviewsService) {}
    @Get()
  findAll() {
    return this.reviewsService.findAll();
  }
  @Post()
  create(@Body() createReview: Review) {
    return this.reviewsService.create(createReview);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateReview: Review) {
    return this.reviewsService.update(+id, updateReview);
  }
  @Delete(':review_id')
  remove(@Param('review_id') review_id: string) {
    return this.reviewsService.remove(+review_id);
  }
  @Get('incomplete')
  findIncomplete() {
    this.reviewsService.findIncomplete();
  }

    
}