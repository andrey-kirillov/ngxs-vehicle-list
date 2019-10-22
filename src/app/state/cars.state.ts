import {Action, State} from '@ngxs/store';

import {AddCar} from '../action/car.action';


@State<any>({
  name: 'cars',
  defaults: {
    cars: [ { model: 'BMW', year: '2005'}]
  }
})
export class CarState {

  @Action(AddCar)
  addCar(ctx, action) {
    const cars = ctx.getState().cars;
    cars.push(action.payload);
    ctx.patchState({cars});
  }

}
