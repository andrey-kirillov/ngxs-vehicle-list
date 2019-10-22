import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {AppRouterModule} from './app-router.module';
import {CarsTate} from './state/cars.state';
import {TanksTate} from './state/tanks.state';

import {NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import { CarsComponent } from './cars/cars.component';
import { TanksComponent } from './tanks/tanks.component';




@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    TanksComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([CarsTate, TanksTate]),
    NgxsReduxDevtoolsPluginModule.forRoot({disabled: environment.production}),
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
