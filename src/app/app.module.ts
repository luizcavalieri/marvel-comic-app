import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './service/hero.service';
import { LoggingService } from './service/logging.service';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { DataGridModule } from 'primeng/components/datagrid/datagrid';
import { PanelModule } from 'primeng/components/panel/panel';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from './service/message.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DataTableModule,
    DataGridModule,
    PanelModule,
    TooltipModule,
    CommonModule,
    HttpClientXsrfModule
  ],
  providers: [
    LoggingService,
    HeroService,
    MessageService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
