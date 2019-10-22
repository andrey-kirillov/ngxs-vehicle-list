import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {AppRouterModule} from './app-router.module';
import {CarState} from './state/cars.state';


import {NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import { CarsComponent } from './cars/cars.component';





@NgModule({
  declarations: [
    AppComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([CarState]),
    NgxsReduxDevtoolsPluginModule.forRoot({disabled: environment.production}),
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
