import { Component, OnInit, Input, OnChanges, AfterViewInit, AfterContentChecked, DoCheck } from '@angular/core';
import { HeroModel } from '../model/hero.model';
import { SeriesModel } from '../model/series.model';
import { ComicsModel } from '../model/comics.model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit, OnChanges {

  // Object hero received from selected option from data grid
  @Input('hero')
  hero: HeroModel;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(){

  }




}
