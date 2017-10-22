import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { Observable } from 'rxjs/Observable';
import { IngredientProvider } from '../../providers/ingredient/ingredient';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-choose-starter',
  templateUrl: 'choose-starter.html',
})
export class ChooseStarterPage {

  username: string;
  displayIngredients;
  countries: any;
  errorMessage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider, private ingredientProvider: IngredientProvider) { 
      this.username = this.navParams.get('username');
  }

  ionViewDidLoad() {
    let options = document.getElementsByClassName('options');
    for (let i = 0; i < options.length; i++) {
    	options[i].addEventListener('click', (e) => {
    		this.onClick(options[i]);
    	});
    }

    this.ingredientProvider.getIngredientList()
    .then(data => {
      this.displayIngredients = data;
    });
  }

  onClick(el) {
    this.userProvider.updateUserIngredient(el.attribute('ingredient'));
  	this.navCtrl.push(WelcomePage);
  }

}
