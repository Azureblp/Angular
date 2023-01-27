import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemotestComponent } from './demotest/demotest.component';
import { TestComponent } from './test.component';
import { HighchartsChartModule } from 'highcharts-angular';




@NgModule({
  declarations: [
    DemotestComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule

  ]
})
export class TestModule { }
