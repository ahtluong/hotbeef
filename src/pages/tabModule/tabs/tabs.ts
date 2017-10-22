import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SwipePage } from '../swipe/swipe';
import { ProgressPage } from '../progress/progress';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = SwipePage;
  tab2Root = ProgressPage;
  tab3Root = SettingsPage;
  username = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // console.log('hoaishgpaihdg');
    // console.log(navParams);
    // console.log('data' +  navParams.get('data'));
    // console.log('username' +  navParams.get('username'));
    this.username = this.navParams.get('username');
    console.log('this' + this.username);
  }

  ionViewDidLoad() {
  }
}