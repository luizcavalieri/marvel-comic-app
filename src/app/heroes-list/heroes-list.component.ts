import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HeroService } from '../service/hero.service';
import { HeroModel } from '../model/hero.model';

@Component({
  selector: 'ng-app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {


  public heroList: Array<HeroModel>;

  // heroes$: Observable<HeroModel[]>;

  @Output('hero')
  heroSelectedEvent = new EventEmitter();

  heroSelected: HeroModel;

  constructor(public heroService: HeroService) {

  }

  ngOnInit() {

    this.getHeroList();

  }

  //getting data from the service hero.
  getHeroList(){

    const heroes$ = this.heroService.getHeroes();

    heroes$.subscribe(
      heroes => this.heroList = heroes['data']['results'],
      heroes => console.log(heroes['data']['results'])
    );

  }

  // Method to get selected hero from datagrid
  selectHero(hero: HeroModel){

    this.heroSelected = hero;

    this.heroSelectedEvent.emit(hero);

    console.log(this.heroSelected);

  }
}
