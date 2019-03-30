import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.sass']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  options;
  data;
  ngOnInit() {
    this.options = {
      chart: {
        type: 'pieChart',
        height: 500,
        x: function(d){return d.key;},
        y: function(d){return d.y;},
        showLabels: true,
        duration: 500,
        labelThreshold: 0.01,
        labelSunbeamLayout: true,
        legend: {
          margin: {
              top: 5,
              right: 35,
              bottom: 5,
              left: 0
          }
        }
      }
    }
    
    this.data = this.getData();
  }

  getData(){
    var sin = [],sin2 = [],cos = [];        

    //Data is represented as an array of {x,y} pairs.
    for (var i = 0; i < 100; i++) {
        sin.push({x: i, y: Math.sin(i/10)});
        sin2.push({x: i, y: i % 10 == 5 ? null : Math.sin(i/10) *0.25 + 0.5});
        cos.push({x: i, y: .5 * Math.cos(i/10+ 2) + Math.random() / 10});
    }

    //Pie chart data should be sent as an array of series objects.
    return [
      {
          key: "One",
          y: 5
      },
      {
          key: "Two",
          y: 2
      },
      {
          key: "Three",
          y: 9
      },
      {
          key: "Four",
          y: 7
      },
      {
        key: "Five",
        y: 4
    },
    {
        key: "Six",
        y: 3
    },
    {
        key: "Seven",
        y: .5
    }
    ];
  }

}
