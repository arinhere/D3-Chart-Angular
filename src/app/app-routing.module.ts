import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscreteBarChartComponent } from './charts/discrete-bar-chart/discrete-bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { CumulativeLineChartComponent } from './charts/cumulative-line-chart/cumulative-line-chart.component';
import { MultibarChartComponent } from './charts/multibar-chart/multibar-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { DonutChartComponent } from './charts/donut-chart/donut-chart.component';

const routes: Routes = [
  {path: '',component: DiscreteBarChartComponent},
  {path: 'lineChart',component: LineChartComponent},
  {path: 'cumulativeLineChart',component: CumulativeLineChartComponent},
  {path: 'multibarChart',component: MultibarChartComponent},
  {path: 'pieChart',component: PieChartComponent},
  {path: 'donutChart',component: DonutChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
