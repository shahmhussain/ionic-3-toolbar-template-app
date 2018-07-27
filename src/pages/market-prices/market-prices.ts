import { Component } from '@angular/core';

/**
 * Generated class for the MarketPricesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'market-prices',
  templateUrl: 'market-prices.html'
})
export class MarketPricesComponent {

  text: string;

  constructor() {
    console.log('Hello MarketPricesComponent Component');
    this.text = 'Hello World';
  }

}
