import { Component } from '@angular/core';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'progress-bar-portion',
  templateUrl: 'progress-bar-portion.html'
})
export class ProgressBarPortionComponent {

	amount: number;
	username = 'emily';

  constructor(private userProvider: UserProvider) {    
    this.userProvider.getUserPortion(this.username).then(data => {
      console.log(data['portion']);
      this.amount = data['portion'];
    });
  }

}
