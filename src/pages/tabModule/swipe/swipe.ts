import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-swipe',
  templateUrl: 'swipe.html',
})
export class SwipePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SwipePage');
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'You\'ve got a match!',
      subTitle: 'Check your progress.',
      buttons: ['OK']
    });
    alert.present();
  }
}
