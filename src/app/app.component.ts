import { Component, Input } from '@angular/core';
import { HeroModel } from './model/hero.model';

@Component({
  selector: 'ng-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hero: HeroModel;

}
