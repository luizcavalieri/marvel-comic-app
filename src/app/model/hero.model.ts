import { ComicsModel } from './comics.model';
import { SeriesModel } from './series.model';
import { StoryModel } from './story.model';
import { EventModel } from './event.model';
import { UrlModel } from './url.model';
import { ThumbnailModel } from './thumbnail.model';


export class HeroModel {

  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: ThumbnailModel;
  portraitImg: string;
  comics: Array<ComicsModel>;
  stories: Array<StoryModel>;
  events: Array<EventModel>;
  urls: Array<UrlModel>;


}
