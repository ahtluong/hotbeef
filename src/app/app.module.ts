import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreateAccountPage } from '../pages/create-account/create-account';
import { ChooseStarterPage } from '../pages/choose-starter/choose-starter';

import { SwipePage } from '../pages/tabModule/swipe/swipe';
import { ProgressPage } from '../pages/tabModule/progress/progress';
import { WelcomePage } from '../pages/welcome/welcome';
import { TabsPage } from '../pages/tabModule/tabs/tabs';
import { SettingsPage } from '../pages/tabModule/settings/settings';

// Components
import { NavbarLogoComponent } from '../components/navbar-logo/navbar-logo';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { ProgressBarPortionComponent } from '../components/progress-bar-portion/progress-bar-portion';

// Providers
import { UserProvider } from '../providers/user/user';
import { IngredientProvider } from '../providers/ingredient/ingredient';

@NgModule({
  declarations: [
    // Pages
    MyApp,
    HomePage,
    CreateAccountPage,
    ChooseStarterPage,
    SwipePage,
    ProgressPage,
    WelcomePage,
    TabsPage,
    SettingsPage,
    // Components
    NavbarLogoComponent,
    ProgressBarComponent,
    ProgressBarPortionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreateAccountPage,
    ChooseStarterPage,
    SwipePage,
    ProgressPage,
    WelcomePage,
    SettingsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    IngredientProvider
  ]
})
export class AppModule {}
