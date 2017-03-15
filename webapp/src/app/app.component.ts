import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { DashboardPage } from '../pages/dashboard/dashboard';
import { WeatherPage } from '../pages/weather/weather';
import { RemotePage } from '../pages/remote/remote';
import { PrinterPage } from '../pages/printer/printer';
import { SoundPage } from '../pages/sound/sound';
import { ClimatePage } from '../pages/climate/climate';
import { LightPage } from '../pages/light/light';
import { MacrosPage } from '../pages/macros/macros';
import { StatisticsPage } from '../pages/statistics/statistics';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = DashboardPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', component: DashboardPage},
      { title: 'Weather', component: WeatherPage},
      { title: 'Remote', component: RemotePage},
      { title: 'Printer', component: PrinterPage},
      { title: 'Sound', component: SoundPage},
      { title: 'Climate', component: ClimatePage},
      { title: 'Light', component: LightPage},
      { title: 'Macros', component: MacrosPage},
      { title: 'Statistics', component: StatisticsPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
      this.nav.setRoot(page.component);
  }
}
