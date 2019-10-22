import {Component} from '@angular/core';

export interface IRoute {
  url: string;
  name: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public  routes: IRoute[] = [
    {url: '/cars', name: 'Cars section'},
    {url: '/tanks', name: 'Tanks section'},
  ];

}
