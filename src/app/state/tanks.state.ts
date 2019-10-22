import {State} from '@ngxs/store';


@State<any>({
  name: 'tanks',
  defaults: {
    tanks: [ { model: 'T-72', year: '1976'}]
  }
})
export class TanksTate {

}

