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
import { CreateAccountPageModule } from '../pages/create-account/create-account.module';
import { ChooseStarterPageModule } from '../pages/choose-starter/choose-starter.module';
import { SwipePageModule } from '../pages/tabModule/swipe/swipe.module';
import { ProgressPageModule } from '../pages/tabModule/progress/progress.module';
import { WelcomePageModule } from '../pages/welcome/welcome.module';
import { TabsPageModule } from '../pages/tabModule/tabs/tabs.module';
import { SettingsPageModule } from '../pages/tabModule/settings/settings.module';

// Components
// import { ComponentsModule } from '../components/components.module';
// import { NavbarLogoComponent } from '../components/navbar-logo/navbar-logo';
// import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
// import { ProgressBarPortionComponent } from '../components/progress-bar-portion/progress-bar-portion';

// Providers
import { UserProvider } from '../providers/user/user';
import { IngredientProvider } from '../providers/ingredient/ingredient';

@NgModule({
  declarations: [
    // Pages
    MyApp,
    HomePage,
    // // Components
    // NavbarLogoComponent,
    // ProgressBarComponent,
    // ProgressBarPortionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    // ComponentsModule,
    CreateAccountPageModule,
    ChooseStarterPageModule,
    SwipePageModule,
    ProgressPageModule,
    WelcomePageModule,
    TabsPageModule,
    SettingsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
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
