import { Component } from '@angular/core';
import { ChartOptions } from '@common/apexchart.model';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-lead-overview',
  imports: [NgApexchartsModule],
  templateUrl: './lead-overview.component.html',
  styles: ``
})
export class LeadOverviewComponent {
  leadOverview: Partial<ChartOptions> = {
    series: [
      {
        name: "Hot Leads",
        data: [80, 50, 30, 40, 100, 20],
      },
      {
        name: "Normal Leads",
        data: [20, 100, 35, 78, 60, 30],
      },
      {
        name: "Cold Leads",
        data: [20, 30, 40, 80, 20, 80],
      },
      {
        name: "Qualified",
        data: [44, 76, 78, 13, 43, 10],
      },
    ],
    chart: {
      type: "radar",
      height: 323,
      parentHeightOffset: 0,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: 1,
    },
    fill: {
      opacity: 0.1,
    },
    markers: {
      size: 3,
      hover: {
        size: 4,
      },
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return val;
        },
      },
    },
    legend: {
      show: true,
      markers: {
        strokeWidth: 0,
        fillColors: undefined,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0,
      },
    },
    xaxis: {
      categories: ["2019", "2020", "2021", "2022", "2023", "2024"],
      axisBorder: { show: false },
      labels: {
        show: true,
        style: {
          colors: [
            "#001b2f",
            "#001b2f",
            "#001b2f",
            "#001b2f",
            "#001b2f",
            "#001b2f",
          ],
          fontSize: "13px",
        },
      },
    },
    yaxis: {
      stepSize: 20,
    },
    colors: ["#108dff", "#963b68", "#E77636", "#27ebb0"],
    dataLabels: {
      enabled: false,
      background: {
        enabled: true,
      },
    },
  }
}
