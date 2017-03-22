import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { WeatherPage } from '../pages/weather/weather';
import { RemotePage } from '../pages/remote/remote';
import { PrinterPage } from '../pages/printer/printer';
import { SoundPage } from '../pages/sound/sound';
import { ClimatePage } from '../pages/climate/climate';
import { LightPage } from '../pages/light/light';
import { MacrosPage } from '../pages/macros/macros';
import { StatisticsPage } from '../pages/statistics/statistics';
import { SettingsPage } from '../pages/settings/settings';

import {ChartsModule} from '../../node_modules/ng2-charts/charts/charts';
import '../../node_modules/chart.js/dist/Chart.bundle.min.js';



@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    WeatherPage,
    RemotePage,
    PrinterPage,
    SoundPage,
    ClimatePage,
    LightPage,
    MacrosPage,
    StatisticsPage,
    SettingsPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    WeatherPage,
    RemotePage,
    PrinterPage,
    SoundPage,
    ClimatePage,
    LightPage,
    MacrosPage,
    StatisticsPage,
    SettingsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
