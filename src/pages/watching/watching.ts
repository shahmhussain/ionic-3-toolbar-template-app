import { Component } from '@angular/core';

/**
 * Generated class for the WatchingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'watching',
  templateUrl: 'watching.html'
})
export class WatchingComponent {

  text: string;

  constructor() {
    console.log('Hello WatchingComponent Component');
    this.text = 'Hello World';
  }

}
