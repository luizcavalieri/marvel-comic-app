import { ComicModel } from './comic.model';
import { SeriesModel } from './series.model';
import { StoryModel } from './story.model';
import { EventModel } from './event.model';
import { UrlModel } from './url.model';


export class HeroModel {

  id: number;
  name: string;
  description: string;
  wiki: string;
  thumbnail: string;
  portraitImg: string;
  comics: Array<ComicModel>;
  series: Array<SeriesModel>;
  stories: Array<StoryModel>;
  events: Array<EventModel>;
  urls: Array<UrlModel>;


}
