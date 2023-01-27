import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {


  
  chart = new Chart({
    chart: {
      type: 'pie'
    },
    title: {
      text: 'pie chart'
    },
    credits: {
      enabled: false
    },
    plotOptions:{
    series:{
      dataLabels:{
        enabled:false,
       
      },
      showInLegend:true,
    }
    },
    series: [
      {
        name: 'value',
        type:'pie',
        data: [[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67],
        [1, 0, 92], [1, 1, 58]],
      }
    ]
  });





  constructor() { }

  ngOnInit(): void {
  }

}
