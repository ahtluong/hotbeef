import { NgModule } from '@angular/core';
import { NavbarLogoComponent } from './navbar-logo/navbar-logo';
import { ProgressBarComponent } from './progress-bar/progress-bar';
@NgModule({
	declarations: [NavbarLogoComponent,
    ProgressBarComponent
  ],
	imports: [],
	exports: [NavbarLogoComponent,
    ProgressBarComponent
  ]
})
export class ComponentsModule {}
