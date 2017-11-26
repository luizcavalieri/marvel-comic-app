import { Injectable } from '@angular/core';
import { MARVEL_API_URL, PUBLIC_KEY, TS, PRIVATE_KEY } from '../app.constants';

import { HttpClient } from '@angular/common/http';
import { HeroModel } from '../model/hero.model';
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from "rxjs/observable/of";
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  heroes: HeroModel [];

  md5 = new Md5();

  hashString: String;

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getHeroes(): Observable<HeroModel[]> {

    this.md5.appendStr(TS).appendStr(PRIVATE_KEY).appendStr(PUBLIC_KEY);
    this.hashString = this.md5.end().toString();
    console.log(`${MARVEL_API_URL}/characters?apikey=${PUBLIC_KEY}&ts=${TS}&hash=${this.hashString}`);

    console.log(this.hashString);

    return this.http
      .get<HeroModel[]>(`${MARVEL_API_URL}/characters?apikey=${PUBLIC_KEY}&ts=${TS}&hash=${this.hashString}`)
      .pipe(
        tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError<HeroModel[]>('getHeroes', []))
      );
    }



  private extractObject(res: Response): Object {
    const data: any = res.json();
    return data || {};
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

}
