import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { IngredientProvider } from '../../providers/ingredient/ingredient';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-choose-starter',
  templateUrl: 'choose-starter.html',
})
export class ChooseStarterPage {

  username: string = "1234567";
  displayIngredients;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider, private ingredientProvider: IngredientProvider) { 
    this.username = this.navParams.get('username');
  }

  ionViewDidLoad() {
    this.ingredientProvider.getIngredientList()
    .then(data => {
      this.displayIngredients = data;
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
  }

  onClick(el) {
    // el = name
    // console.log('hello');
    this.userProvider.updateUserIngredient(el, this.username);
    this.navCtrl.push(WelcomePage, {ingredient: el});
  }

}
