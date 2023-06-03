import { Injectable } from '@nestjs/common';
import { Form } from 'src/modules/forms/models/form.entity';
import { Painting } from 'src/modules/paintings/models/painting.entity';
import { Review } from 'src/modules/reviews/models/review.entity';
import { Event } from 'src/modules/events/models/event.entity';
import { Artist } from 'src/modules/artists/models/artist.entity';

@Injectable()
export class DatasourceService {
  
  private paintings: Painting[] = [];
  getPaintings(): Painting[] {
    return this.paintings;
  }
  private forms: Form[]=[];
  getForms(): Form[]{
    return this.forms;
  }
  private reviews: Review[]=[];
  getReviews(): Review[]{
    return this.reviews;
  }
  private events: Event[]=[];
  getEvents(): Event[]{
    return this.events;
  }
  private artists: Artist[]=[];
  getArtists(): Artist[]{
    return this.artists;
  }

  
}