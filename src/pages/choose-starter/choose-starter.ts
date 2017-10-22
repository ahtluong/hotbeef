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

  username: String;
  displayIngredients: {};

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private userProvider: UserProvider, private ingredientProvider: IngredientProvider) { 
      this.username = this.navParams.get('username');

      let ingredients = this.ingredientProvider.getIngredientList();
      if (ingredients != null) {
        console.log('succeeded, fetched ingredients');
        console.log(ingredients);
        var stringifiedIngredients = JSON.stringify(ingredients);
        var parsedIngredients = JSON.parse(stringifiedIngredients);
        this.displayIngredients = parsedIngredients;
      } else {
        // Fail, do something;
        console.log('failed fetch ingredients');
      } 
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseStarterPage');

    let options = document.getElementsByClassName('options');
    for (let i = 0; i < options.length; i++) {
    	options[i].addEventListener('click', (e) => {
    		this.onClick(options[i]);
    	});
    }
  }

  onClick(el) {
    this.userProvider.updateUserIngredient(el.attribute('ingredient'));
  	this.navCtrl.push(WelcomePage);
  }

}
