import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { NavbarLogoComponent } from './navbar-logo/navbar-logo';
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { ProgressBarPortionComponent } from './progress-bar-portion/progress-bar-portion';
@NgModule({
	declarations: [
		NavbarLogoComponent,
    ProgressBarComponent,
    ProgressBarPortionComponent
  ],
	imports: [IonicModule],
	exports: [
		NavbarLogoComponent,
    ProgressBarComponent,
    ProgressBarPortionComponent
  ]
})
export class ComponentsModule {}
