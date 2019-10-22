import { Component } from '@angular/core';

import {AddTank} from '../action/tank.action';

import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-tanks',
  templateUrl: './tanks.component.html',
  styleUrls: ['./tanks.component.scss']
})
export class TanksComponent  {

  @Select(state => state.tanks) tanksList$: Observable<any>;

  constructor(private store: Store) { }

  public addTank(tankModel: string, tankYear: string): void {
    this.store.dispatch(new AddTank({model: tankModel, year: tankYear}));
  }
}
