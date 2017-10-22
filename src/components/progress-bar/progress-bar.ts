import { Component } from '@angular/core';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent {

  amount: number;
  username = 'emily';
  dishes = [];

  constructor(private userProvider: UserProvider) {    
    this.userProvider.getUserInventory(this.username).then(data => {
      console.log('hello');
      console.log(data);
      console.log(data[0])
      for (var item in data) {
        this.dishes.push(data[item]);
      }
      console.log('and the dishes are');
      console.log(this.dishes);
      // this.dishes.push(data);
      // for each dish
      // for (var obj in data) {
      //   var dish = {}
      //   dish['name'] = data[obj].dish_name;
      //   var count = 0;
      //   var ingredients = data[obj].ingredients;

      //   // for each ingredient in the dish
      //   for (var item in ingredients) {
      //     if (ingredients[item].acquired == true) {
      //       count += 1;
      //     }
      //   }
      //   // calculate the percentage
      //   var percentage = ((count * 1.0) / (ingredients.length * 1.0)) * 100
      //   // this.dishPercentages.push(percentage);
      //   dish['amount'] = percentage;
      //   this.dishes.push(dish);
      // }
    });
    // this.userProvider.getUserPortion(this.username).then(data => {
      // console.log(data['portion']);
      // this.amount = data['portion'];
    // });
  }
}
