import { Component } from '@angular/core';
import { UserProvider } from '../../providers/user/user';

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

  amount: number;
  username = 'emily';

  constructor(private userProvider: UserProvider) {
    console.log('Hello ProgressBarComponent Component');
    
    this.userProvider.getUserPortion(this.username).then(data => {
      console.log(data['portion']);
      this.amount = data['portion'];
    });
  }

  setAmount(amt) {
    this.amount = amt;
    console.log('PLS BRO');
  }
}
