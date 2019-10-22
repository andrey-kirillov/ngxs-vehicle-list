import { Component } from '@angular/core';

import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {AddCar} from '../action/car.action';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent  {

  @Select(state => state.cars) public carsList$: Observable<any>;

  constructor(private store: Store) { }

  public addCar(carModel: string, carYear: string): void {
    this.store.dispatch(new AddCar({model: carModel, year: carYear}));
  }
}
