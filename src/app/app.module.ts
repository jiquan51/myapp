import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from "@angular/http";
import { MyApp } from './app.component';
import { SafePipe } from "../pages/about/about";
import { AboutDetailsPage } from '../pages/about/about';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HotSpotsPage } from '../pages/hotspots/hotspots';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ZxxcService } from '../providers';
import { MgcTypePipe } from "../pipes";

@NgModule({
  declarations: [
    MyApp,
    SafePipe,
    AboutPage,
    AboutDetailsPage,
    ContactPage,
    HomePage,
    TabsPage,
    HotSpotsPage,
    MgcTypePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AboutDetailsPage,
    ContactPage,
    HomePage,
    TabsPage,
    HotSpotsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ZxxcService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
