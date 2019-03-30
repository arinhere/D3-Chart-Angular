import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NvD3Module } from 'ng2-nvd3';

//Global Import D3 and NVD3 components
import 'd3';
import 'nvd3';
import { DiscreteBarChartComponent } from './charts/discrete-bar-chart/discrete-bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { CumulativeLineChartComponent } from './charts/cumulative-line-chart/cumulative-line-chart.component';
import { MultibarChartComponent } from './charts/multibar-chart/multibar-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { DonutChartComponent } from './charts/donut-chart/donut-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    DiscreteBarChartComponent,
    LineChartComponent,
    CumulativeLineChartComponent,
    MultibarChartComponent,
    PieChartComponent,
    DonutChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NvD3Module//Adding Chart Module to APP Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
