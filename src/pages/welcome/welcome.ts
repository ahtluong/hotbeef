import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabModule/tabs/tabs';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  ingredient = null;
  username = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ingredient = this.navParams.get('ingredient');
    this.username = this.navParams.get('username');
  }

  ionViewDidLoad() {
  }

  tabsPage() {
    this.navCtrl.push(TabsPage, {username: this.username});
  }
}