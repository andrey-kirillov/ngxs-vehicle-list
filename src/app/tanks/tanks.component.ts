import { Component } from '@angular/core';

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

}
