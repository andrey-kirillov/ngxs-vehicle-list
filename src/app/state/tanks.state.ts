import {Action, State} from '@ngxs/store';

import {AddTank} from '../action/tank.action';


@State<any>({
  name: 'tanks',
  defaults: {
    tanks: [ { model: 'T-72', year: '1976'}]
  }
})
export class TanksTate {
  @Action(AddTank)
  addTank(ctx, action) {
    const tanks = ctx.getState().tanks;
    tanks.push(action.payload);
    ctx.patchState({tanks});
  }
}

