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

  text: string;
  amount: number;
  username = 'emily';

  constructor(private userProvider: UserProvider) {
    console.log('Hello ProgressBarComponent Component');
    
    this.userProvider.getUserPortion(this.username).then(data => {
      console.log(data);
    });
    
    this.amount = 40;
    this.text = this.amount + '%';
  }

}
