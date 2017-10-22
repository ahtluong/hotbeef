import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChooseStarterPage } from '../choose-starter/choose-starter';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {
  username: String;
  password: String;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider)
  { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccountPage');
  }

  submitForm() {
    let createUserResult = this.userProvider.createUser(this.username, this.password) == true);
    if (createUserResult) {
      this.navCtrl.push(ChooseStarterPage);
    } else {
      // Fail, do something;
      console.log('fail');
      this.navCtrl.push(ChooseStarterPage);
    } 
  }

}
