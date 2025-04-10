import { Component } from '@angular/core';
import { ChartOptions } from '@common/apexchart.model';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-recent-performance',
  imports: [NgApexchartsModule],
  templateUrl: './recent-performance.component.html',
  styles: ``
})
export class RecentPerformanceComponent {
  year = new Date().getFullYear() - 1
  prevYear = new Date().getFullYear() - 2

  recentPerformance: Partial<ChartOptions> = {
    chart: {
      height: 360,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: "13px",
            color: undefined,
            offsetY: 25,
          },
          value: {
            offsetY: -15,
            fontSize: "25px",
            color: "#343a40",
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    },
    fill: {
      gradient: {
        // enabled: true,
        shade: "dark",
        shadeIntensity: 0.2,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    stroke: {
      dashArray: 7,
    },
    colors: ["#E77636"],
    series: [87],
    labels: ["Growth"],

  }
}
