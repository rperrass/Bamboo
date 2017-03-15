import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DashboardPage } from '../dashboard/dashboard';
import { SettingsPage } from '../settings/settings';

/*
  Generated class for the Remote page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-remote',
  templateUrl: 'remote.html'
})
export class RemotePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RemotePage');
  }

  headHome() {
    this.navCtrl.setRoot(DashboardPage)
  }

  showSettings() {
    this.navCtrl.push(SettingsPage)
  }

}
