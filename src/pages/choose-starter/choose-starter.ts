import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-choose-starter',
  templateUrl: 'choose-starter.html',
})
export class ChooseStarterPage {

  username: String;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private userProvider: UserProvider) { 
      this.username = this.navParams.get('username');
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
