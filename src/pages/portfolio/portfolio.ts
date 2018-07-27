import { Component } from '@angular/core';

/**
 * Generated class for the PortfoiloComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'portfolio',
  templateUrl: 'portfolio.html'
})
export class PortfolioComponent {

  text: string;

  constructor() {
    console.log('Hello PortfoiloComponent Component');
    this.text = 'Hello World';
  }

}
