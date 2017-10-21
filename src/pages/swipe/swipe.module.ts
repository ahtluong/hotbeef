import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SwipePage } from './swipe';
// import { NavbarLogoComponent } from '../../components/navbar-logo/navbar-logo';

@NgModule({
  declarations: [
    SwipePage,
  ],
  imports: [
    IonicPageModule.forChild(SwipePage),
  ],
})
export class SwipePageModule {}
