import { Component } from '@angular/core';

/**
 * Generated class for the ProgressBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent {

  text: string;
  amount: number;

  constructor() {
    console.log('Hello ProgressBarComponent Component');
    this.amount = 50;
    this.text = String(this.amount) + '%';
  }

}
