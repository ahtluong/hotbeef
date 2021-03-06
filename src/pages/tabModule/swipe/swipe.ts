import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController, LoadingController } from 'ionic-angular';
// import { Observable } from 'rxjs/Observable';
import { UserProvider } from '../../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-swipe',
  templateUrl: 'swipe.html',
})
export class SwipePage {

  potentialMatch;
  currentNum: number;
  username = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController, private userProvider: UserProvider) {
    this.fetchNewMatch();

    this.username = this.navParams.get('username') || navParams.data;
  }

  ionViewDidLoad() {
  }

  fetchNewMatch() {
    this.userProvider.fetchPotentialMatch()
    .then(data => {
      console.log(data);
      // if(data['starter_ingredient'] == null) {
        // data['starter_ingredient'] = 'default';
      // }
      this.potentialMatch = data;
    })
    .catch(err => {
      console.log(err);
    });
  }

  rejectPotentialMatch() {
    // logic for removing card and replacing with new view
    this.fetchNewMatch();
  }

  acceptPotentialMatch() {
    this.userProvider.acceptPotentialMatch(this.username, this.potentialMatch.username)
    .then(data => {
      console.log(data);
    }).catch(err => {
      console.log(err);
    })
    this.fetchNewMatch();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'You\'ve got a match!',
      subTitle: 'Check your progress.',
      buttons: ['OK']
    });
    alert.present();
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }
}
