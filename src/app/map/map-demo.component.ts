import { Component } from '@angular/core';

@Component({
  templateUrl: './map-demo.component.html',
  styleUrls: ['./map-demo.component.scss'],
})
export class MapDemoComponent {
  lat = -12.043333;
  lng = -77.028333;
  markers = [
    { lat: this.lat, lng: this.lng, title: 'Lima' },
    {
      lat: this.lat + 0.001,
      lng: this.lng + 0.001,
      infoWindow: {
        content: '<p>Some content about this marker</p>',
      },
    },
  ];
  polyline = {
    path: [
      [-12.044012922866312, -77.02470665341184],
      [-12.05449279282314, -77.03024273281858],
      [-12.055122327623378, -77.03039293652341],
      [-12.075917129727586, -77.02764635449216],
      [-12.07635776902266, -77.02792530422971],
      [-12.076819390363665, -77.02893381481931],
      [-12.088527520066453, -77.0241058385925],
      [-12.090814532191756, -77.02271108990476],
    ],
  };
  overlay = {
    lat: this.lat,
    lng: this.lng,
    content: `<div style="
      font-size: 50px;
      border: 5px solid #3ebc46;
      border-radius: 20px;
      padding: 20px;
      background-color: rgba(62, 188, 70, .6);
    ">Lima</div>`,
  };
  polygon = {
    paths: [
      [-12.040397656836609, -77.03373871559225],
      [-12.040248585302038, -77.03993927003302],
      [-12.050047116528843, -77.02448169303511],
      [-12.044804866577001, -77.02154422636042],
    ],
  };
  geoJSONPolygon = {
    useGeoJSON: true,
    strokeColor: '#e55e20',
    fillColor: '#e55e20',
    paths: [
      [
        [
          [-105.00432014465332, 39.74732195489861],
          [-105.00715255737305, 39.74620006835170],
          [-105.00921249389647, 39.74468219277038],
          [-105.01067161560059, 39.74362625960105],
          [-105.01195907592773, 39.74290029616054],
          [-105.00989913940431, 39.74078835902781],
          [-105.00758171081543, 39.74059036160317],
          [-105.00346183776855, 39.74059036160317],
          [-105.00097274780272, 39.74059036160317],
          [-105.00062942504881, 39.74072235994946],
          [-105.00020027160645, 39.74191033368865],
          [-105.00071525573731, 39.74276830198601],
          [-105.00097274780272, 39.74369225589818],
          [-105.00097274780272, 39.74461619742136],
          [-105.00123023986816, 39.74534214278395],
          [-105.00183105468751, 39.74613407445653],
          [-105.00432014465332, 39.74732195489861],
        ],
        [
          [-105.00361204147337, 39.74354376414072],
          [-105.00301122665405, 39.74278480127163],
          [-105.00221729278564, 39.74316428375108],
          [-105.00283956527711, 39.74390674342741],
          [-105.00361204147337, 39.74354376414072],
        ],
      ],
      [
        [
          [-105.00942707061768, 39.73989736613708],
          [-105.00942707061768, 39.73910536278566],
          [-105.00685214996338, 39.73923736397631],
          [-105.00384807586671, 39.73910536278566],
          [-105.00174522399902, 39.73903936209552],
          [-105.00041484832764, 39.73910536278566],
          [-105.00041484832764, 39.73979836621592],
          [-105.00535011291504, 39.73986436617916],
          [-105.00942707061768, 39.73989736613708],
        ],
      ],
    ],
  };
  route = {
    origin: [-12.044012922866312, -77.02470665341184],
    destination: [-12.090814532191756, -77.02271108990476],
    travelMode: 'driving',
  };
  instructions: string[] = [];

  clickHandler(e: any) {
    window.alert('Map clicked');
  }

  dragendHandler(e: any) {
    window.alert('Map dragend');
  }

  markerHandler(e: any) {
    if (e.title === 'Lima') {
      window.alert('Lima\'s marker clicked');
    }
  }

  instructionHandler(instruction: string) {
    this.instructions.push(instruction);
  }
}
