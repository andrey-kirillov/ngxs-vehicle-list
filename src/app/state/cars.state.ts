import {State} from '@ngxs/store';


@State<any>({
  name: 'cars',
  defaults: {
    cars: [ { model: 'BMW', year: '2005'}]
  }
})
export class CarsTate {

}
