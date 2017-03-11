import { Injectable } from '@angular/core';
import { MARVEL_API_URL, PUBLIC_KEY, TS, PRIVATE_KEY } from '../app.constants';

import { Http, Response } from '@angular/http';
import { HeroModel } from '../model/hero.model';
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class HeroService {

  heroes: HeroModel [];

  md5 = new Md5();

  hashString: String;

  constructor(private http: Http) { }



  getHeroes(): Observable<HeroModel[]> {


    this.md5.appendStr(TS).appendStr(PRIVATE_KEY).appendStr(PUBLIC_KEY);

    this.hashString = this.md5.end().toString();

    console.log(this.hashString);

    return this.http.get(`${MARVEL_API_URL}/characters?apikey=${PUBLIC_KEY}&ts=${TS}&hash=${this.hashString}`)
      .map(response => response.json().data.results
      );

  }


  printHeroes(){

    this.md5.appendStr(TS).appendStr(PRIVATE_KEY).appendStr(PUBLIC_KEY);

    this.hashString = this.md5.end().toString();

    const response$ = this.http.get(`${MARVEL_API_URL}/characters?apikey=${PUBLIC_KEY}&ts=${TS}&hash=${this.hashString}`)
      .map((res:Response) => res.json());

    response$.subscribe(
      heroes => console.log(heroes),
      () => {},
      () => console.log("Completed!")
    );
  }

}
