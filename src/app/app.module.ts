import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpModule } from '@angular/http';
import { EventsPage } from '../pages/events/events';
import { SelfiesPage } from '../pages/selfies/selfies';
import { NovaSelfiePage } from '../pages/nova-selfie/nova-selfie';
import { Camera } from '@ionic-native/camera';
import { EventProvider } from '../providers/event/event';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventsPage,
    SelfiesPage,
    NovaSelfiePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventsPage,
    SelfiesPage,
    NovaSelfiePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EventProvider
  ]
})
export class AppModule {}
