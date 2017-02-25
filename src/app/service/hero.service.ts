import { Injectable } from '@angular/core';
import { MARVEL_API_URL } from '../app.constants';

import { Http, Response } from '@angular/http';
import { HeroModel } from '../model/hero.model';
import { Observable } from 'rxjs';

@Injectable()
export class HeroService {

  heroes: HeroModel [];

  constructor(private http: Http) {

    this.printHeroes();

  }


  printHeroes(){
    const response$ = this.http.get(`${MARVEL_API_URL}/characters?apikey=d128928f89eab7dca3a7f3c003c48f80&ts=1&hash=c8d6f1e0ec832edafe8c4242ac8cc9e8`)
      .map((res:Response) => res.json());

    response$.subscribe(
      heroes => console.log(heroes),
      () => {},
      () => console.log("Completed!")
    );
  }

  getHeroes(): Observable<HeroModel[]> {
    return this.http.get(`${MARVEL_API_URL}/characters?apikey=d128928f89eab7dca3a7f3c003c48f80&ts=1&hash=c8d6f1e0ec832edafe8c4242ac8cc9e8`)
      .map(response => response.json().data.results
      );


  }




  // getHeroes() {
  //   // return this.http.get(`${MARVEL_API_URL}/characters?apikey=d128928f89eab7dca3a7f3c003c48f80&ts=1&hash=c8d6f1e0ec832edafe8c4242ac8cc9e8`)
  //   //   .map(res => res.json())
  //   //   .subscribe(
  //   //     results => this.heroes = results
  //   //   );
  //
  // }
}
