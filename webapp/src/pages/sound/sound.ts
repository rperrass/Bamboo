import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DashboardPage } from '../dashboard/dashboard';
import { SettingsPage } from '../settings/settings';

/*
  Generated class for the Sound page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sound',
  templateUrl: 'sound.html'
})

export class SoundPage {

  chartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  chartLabels: string[] = ['Test 1', 'Test 2', 'Test 3', 'Test 4'];
  chartType: string = 'line';
  chartLegend: boolean = true;

  chartData: any[] = [
    { data: [75, 80, 45, 100], label: 'Student A' },
    { data: [80, 55, 75, 95], label: 'Student B' }
  ];

  actual_temp: "25 °C"
  actual_hum: "40 %"

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SoundPage');
  }

  headHome() {
    this.navCtrl.setRoot(DashboardPage)
  }

  showSettings() {
    this.navCtrl.push(SettingsPage)
  }

}
