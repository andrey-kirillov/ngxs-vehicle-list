import { Component } from '@angular/core';

import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent  {

  @Select(state => state.cars) carsList$: Observable<any>;

  constructor(private store: Store) { }

}
