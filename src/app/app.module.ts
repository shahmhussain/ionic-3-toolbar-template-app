import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
//Pages
import { HomePage } from '../pages/home/home';
import { MarketPricesComponent } from "../pages/market-prices/market-prices";
import { PortfolioComponent } from "../pages/portfolio/portfolio";
import { WatchingComponent } from "../pages/watching/watching";
//Components
import { ToolbarComponent } from '../components/toolbar/toolbar';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ToolbarComponent,
    MarketPricesComponent,
    PortfolioComponent,
    WatchingComponent
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
