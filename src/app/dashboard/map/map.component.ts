import { Component } from '@angular/core';

@Component({
  selector: 'admin-dashboard-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class DashboardMapComponent {
  lat = 37.7827339;
  lng = -122.5113068;
  polyline = {
    path: [
      [37.779884, -122.508400],
      [37.779859, -122.509461],
      [37.781996, -122.510737],
      [37.7826649, -122.5112919],
    ],
  };
}
