import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { UserProvider } from '../../../providers/user/user';


@IonicPage()
@Component({
  selector: 'page-swipe',
  templateUrl: 'swipe.html',
})
export class SwipePage {

  potentialMatch;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private userProvider: UserProvider) {
    this.userProvider.fetchPotentialMatch();
  }

  ionViewDidLoad() {
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'You\'ve got a match!',
      subTitle: 'Check your progress.',
      buttons: ['OK']
    });
    alert.present();
  }

  rejectIngredient() {
    // logic for removing card and replacing with new view
  }
}
