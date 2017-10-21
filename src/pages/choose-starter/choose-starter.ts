import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';

@IonicPage()
@Component({
  selector: 'page-choose-starter',
  templateUrl: 'choose-starter.html',
})
export class ChooseStarterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
  	console.log(el);
  	this.navCtrl.push(WelcomePage);
  }

}
