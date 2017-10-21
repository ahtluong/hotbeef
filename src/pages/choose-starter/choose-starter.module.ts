import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseStarterPage } from './choose-starter';

@NgModule({
  declarations: [
    ChooseStarterPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseStarterPage),
  ],
})
export class ChooseStarterPageModule {}
