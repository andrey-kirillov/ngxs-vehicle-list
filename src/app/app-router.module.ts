import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';

import {CarsComponent} from './cars/cars.component';


const routes: Route[] = [
  {
    path: '', redirectTo: 'cars', pathMatch: 'full'
  },
  {
    path: 'cars', component: CarsComponent
  },
  {
    path: '**',  redirectTo: '/cars'
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
