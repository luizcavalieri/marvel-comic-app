import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './service/hero.service';
import { BaseService } from './service/base.service';
import { LoggingService } from './service/logging.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    BaseService,
    LoggingService,
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
