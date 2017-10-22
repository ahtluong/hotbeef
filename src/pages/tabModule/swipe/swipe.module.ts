import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SwipePage } from './swipe';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    SwipePage
  ],
  imports: [
    IonicPageModule.forChild(SwipePage),
    ComponentsModule
  ],
})
export class SwipePageModule {}
