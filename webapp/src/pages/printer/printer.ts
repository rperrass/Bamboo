import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DashboardPage } from '../dashboard/dashboard';
import { SettingsPage } from '../settings/settings';

/*
  Generated class for the 3dprinter page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-printer',
  templateUrl: 'printer.html'
})
export class PrinterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad printerPage');
  }

  headHome() {
    this.navCtrl.setRoot(DashboardPage)
  }

  showSettings() {
    this.navCtrl.push(SettingsPage)
  }

}
