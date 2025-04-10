import { Component } from '@angular/core';
import { ChartOptions } from '@common/apexchart.model';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-sales-pipeline',
  imports: [NgApexchartsModule],
  templateUrl: './sales-pipeline.component.html',
  styles: ``
})
export class SalesPipelineComponent {
salespipe:Partial<ChartOptions>={
  series: [65.48, 112.02, 80.48],
  labels: ["Won", "Discovery", "Undiscovery"],
  chart: {
    type: "donut",
    height: 200,
  },
  plotOptions: {
    pie: {
      // size: 100,
      donut: {
        size: "80%",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  stroke: {
    width: 0,
  },
  yaxis: {
    labels: {
      formatter: function (e) {
        return e + "k Session";
      },
    },
    tickAmount: 4,
    min: 0,
  },
  colors: ["#287F71", "#522c8f", "#E77636"],
}
}
