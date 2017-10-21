import { Component } from '@angular/core';

/**
 * Generated class for the NavbarLogoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'navbar-logo',
  templateUrl: 'navbar-logo.html'
})
export class NavbarLogoComponent {

  text: string;

  constructor() {
    console.log('Hello NavbarLogoComponent Component');
    this.text = 'Hello World';
  }

}
