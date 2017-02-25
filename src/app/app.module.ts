import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './service/hero.service';
import { LoggingService } from './service/logging.service';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { DataGridModule } from 'primeng/components/datagrid/datagrid';
import { PanelModule } from 'primeng/components/panel/panel';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    DataGridModule,
    PanelModule,
    TooltipModule
  ],
  providers: [
    LoggingService,
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
