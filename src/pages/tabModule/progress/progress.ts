import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../../providers/user/user';
import { ProgressBarComponent } from '../../../components/progress-bar/progress-bar';

@IonicPage()
@Component({
  selector: 'page-progress',
  templateUrl: 'progress.html',
})
export class ProgressPage {

  username = 'emily';
  // dishNames = [];
  // dishPercentages = [];
  dishes = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider) {
  }
  
  ionViewDidLoad() {
    this.userProvider.getUserInventory(this.username).then(data => {

      // for each dish
      for (var obj in data) {
        // this.dishNames.push(data[obj].dish_name);
        var dish = {}
        dish['name'] = data[obj].dish_name;
        var count = 0;
        var ingredients = data[obj].ingredients;

        // for each ingredient in the dish
        for (var item in ingredients) {
          if (ingredients[item].acquired == true) {
            count += 1;
          }
        }

        // calculate the percentage
        var percentage = ((count * 1.0) / (ingredients.length * 1.0)) * 100
        // this.dishPercentages.push(percentage);
        dish['amount'] = percentage;
        console.log(dish['amount']);
        this.dishes.push(dish);
        console.log(this.dishes);
      }
    });
  }

  setAmount(amt) {
    console.log('jk');
  }
}