import { NgModule } from '@angular/core';
import { NavbarLogoComponent } from './navbar-logo/navbar-logo';
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { ProgressBarPortionComponent } from './progress-bar-portion/progress-bar-portion';
@NgModule({
	declarations: [
		NavbarLogoComponent,
    ProgressBarComponent,
    ProgressBarPortionComponent
  ],
	imports: [],
	exports: [
		NavbarLogoComponent,
    ProgressBarComponent,
    ProgressBarPortionComponent
  ]
})
export class ComponentsModule {}
