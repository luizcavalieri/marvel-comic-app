import { Component, OnInit, Input } from '@angular/core';
import { HeroModel } from '../model/hero.model';

@Component({
  selector: 'ng-app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  // Object hero received from selected option from data grid
  @Input('hero')
  hero: HeroModel;

  constructor() { }

  ngOnInit() {

  }


}
