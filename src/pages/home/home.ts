import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateAccountPage } from '../create-account/create-account';
import { TabsPage } from '../tabModule/tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  createAccount() {
    this.navCtrl.push(CreateAccountPage);
  }

  login() {
    this.navCtrl.push(TabsPage, {username: 'emily'});
  }
}
