import { HeroSearchService } from './shared/hero-search.service';
import { InMemoryDataService } from './shared/in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { HeroService } from './shared/hero.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

const routes:Routes= [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },{
    path:'heroes',
    component: HeroComponent
  },{
    path: 'dashboard',
    component: DashboardComponent
  },{
    path: 'detail/:id',
    component: HeroDetailComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [
    HeroService,
    HeroSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
