import { Component } from '@angular/core';
import { ToolbarComponent } from '../../components/toolbar/toolbar';
import { MarketPricesComponent } from '../market-prices/market-prices';
import { PortfolioComponent } from '../portfolio/portfolio';
import { WatchingComponent } from '../watching/watching';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private currentPage: string;

  constructor() {

  }
  
  ngOnInit(){
    this.currentPage="Market";
  }

  navigatePage( pageName: string){
    this.currentPage = pageName;
  }
  

}
