import { Component } from '@angular/core';
import { ChartOptions } from '@common/apexchart.model';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-sales-overview',
  imports: [NgApexchartsModule,NgbDropdownModule],
  templateUrl: './sales-overview.component.html',
  styles: ``
})
export class SalesOverviewComponent {
  saleOverview: Partial<ChartOptions> = {
    series: [
      {
        name: "Total Income",
        data: [
          1000, 2100, 1800, 4540, 4540, 2300, 2300, 6860, 6860, 3500, 3500, 2100,
        ],
      },
      {
        name: "Total Revenue",
        data: [
          2000, 5300, 1100, 1300, 4800, 5200, 7800, 4350, 4750, 7380, 4540, 4800,
        ],
      },
      {
        name: "Total Revenue",
        data: [
          7400, 5900, 3200, 7300, 3400, 5800, 8900, 6540, 4100, 6380, 2300, 6750,
        ],
      },
    ],
    chart: {
      type: "area",
      height: 300,
      parentHeightOffset: 0,
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 4,
        color: "#000",
        opacity: 0.3,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#108dff", "#E77636", "#db398a"],
    fill: {
      opacity: 1,
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 90, 100],
        colorStops: [
          [
            {
              offset: 0,
              color: "#108dff",
              opacity: 0.3,
            },
            {
              offset: 50,
              color: "#108dff",
              opacity: 0.2,
            },
            {
              offset: 100,
              color: "#108dff",
              opacity: 0.0,
            },
          ],
          [
            {
              offset: 0,
              color: "#E77636",
              opacity: 0.3,
            },
            {
              offset: 50,
              color: "#E77636",
              opacity: 0.2,
            },
            {
              offset: 100,
              color: "#E77636",
              opacity: 0.0,
            },
          ],
          [
            {
              offset: 0,
              color: "#db398a",
              opacity: 0.08,
            },
            {
              offset: 50,
              color: "#db398a",
              opacity: 0.06,
            },
            {
              offset: 100,
              color: "#db398a",
              opacity: 0.0,
            },
          ],
        ],
      },
    },
    stroke: {
      curve: ["smooth", "smooth", "smooth"],
      width: [2, 0, 2],
    },
    grid: {
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      min: 0,
      labels: {
        formatter: (value) => `$${(value / 1000).toFixed(0)}k`,
      },
    },
    legend: {
      position: "bottom",
    },
  }
}
