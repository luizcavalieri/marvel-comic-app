import { Component, OnInit } from '@angular/core';
import { HeroService } from '../service/hero.service';
import { HeroModel } from '../model/hero.model';
import { LoggingService } from '../service/logging.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {


  public heroList: Array<HeroModel>;
  //public heroList: any;


  constructor(
    public heroService: HeroService,
    loggingService: LoggingService) {

  }

  ngOnInit() {

    this.getHeroList();

  }

  getHeroList(){

    const heroes$ = this.heroService.getHeroes();

    heroes$.subscribe(
      heroes => this.heroList = heroes
    );

  }

  generateArray(obj){
    return Object.keys(obj).map((key)=>{ return obj[key]});
  }

}
