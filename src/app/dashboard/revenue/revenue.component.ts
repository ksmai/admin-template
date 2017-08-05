import { Component } from '@angular/core';

/**
 * Renders revenue data inside dashboard
 */
@Component({
  selector: 'admin-dashboard-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.scss'],
})
export class DashboardRevenueComponent {
  revenueData = {
    columns: [
      ['data1', 30, 50, 40, 70, 120, 111, 42, 79, 100, 120, 142],
    ],
    type: 'bar',
    showAxis: false,
    showLegend: false,
    colorPattern: ['rgba(255, 255, 255, .50)'],
  };
}
