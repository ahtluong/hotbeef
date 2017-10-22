import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-progress',
  templateUrl: 'progress.html',
})
export class ProgressPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider) {
  }
  
  ionViewDidLoad() {
  }
}