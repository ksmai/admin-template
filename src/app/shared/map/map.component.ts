import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/zip';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';

// typings not available
const GMaps = require('gmaps');

interface IMarker {
  lat: number;
  lng: number;
  title?: string;
  infoWindow?: { content: string };
}

interface IPolyline {
  path: Array<[number, number]>;
  strokeColor?: string;
  strokeOpacity?: number;
  strokeWeight?: number;
}

interface IOverlay {
  lat: number;
  lng: number;
  content: string;
}

interface IPolygon {
  paths: Array<[number, number]>;
  strokeColor?: string;
  strokeOpacity?: number;
  strokeWeight?: number;
  fillColor?: string;
  fillOpacity?: number;
  useGeoJSON?: boolean;
}

interface IRoute {
  origin: [number, number];
  destination: [number, number];
  travelMode: string;
}

/**
 * A component wrapper around gmaps.js
 * For this to work, https://maps.googleapis.com/maps/api/js has to
 * be included on the page, with a working API key
 *
 * Required inputs:
 *   - lat, lng {number}: center of map
 *
 * Optional inputs:
 *   - markers: Array of marker object with the following properties
 *     - lat, lng: required
 *     - title: optional
 *     - infoWindow: { content: string } (content of the pop-up window)
 *   - geocode: flag to allow user searching for locations
 *   - height: height of the map (any valid css height value)
 *   - polyline: A polyline object with the following properties
 *     - path: Array of [lat, lng] pairs
 *     - strokeColor: optional
 *     - strokeOpacity: optional
 *     - strokeWeight: optional
 *   - overlay: An overlay object with the following properties
 *     - lat, lng: required
 *     - content: HTML string of the overlay (any styling must be provided)
 *   - polygon: A polygon object with the following properties
 *     - paths: Array of [lat, lng] pairs
 *     - strokeColor, strokeWeight, strokeOpacity: optional
 *     - fillColor, fillOpacity: optional
 *     - useGeoJSON: a flag to use geoJSON polygon (defaults: false)
 *   - route: A route object with the following properties
 *     - origin: [lat, lng]
 *     - destination: [lat, lng]
 *     - travelMode: 'driving' | 'bicycling' | 'walking'
 *
 * @example
 * // basic map with height set
 * <admin-map [lat]="lat" [lng]="lng" height="600px"></admin-map>
 *
 * @example
 * // map markers
 * <admin-map
 *   [lat]="lat"
 *   [lng]="lng"
 *   [markers]="markers"
 *   (markerClick)="markerHandler($event)"
 * ></admin-map>
 *
 * @example
 * // map events
 * <admin-map
 *   [lat]="lat"
 *   [lng]="lng"
 *   (mapClick)="clickHandler($event)"
 *   (mapDragend)="dragendHandler($event)"
 * ></admin-map>
 *
 * @example
 * // geocode
 * <admin-map [lat]="lat" [lng]="lng" [geocode]="true"></admin-map>
 *
 * @exmaple
 * // polylines, overlays, (geoJSON) polygons
 * <admin-map [lat]="lat" [lng]="lng" [polyline]="polyline"></admin-map>
 * <admin-map [lat]="lat" [lng]="lng" [overlay]="overlay"></admin-map>
 * <admin-map [lat]="lat" [lng]="lng" [polygon]="polygon"></admin-map>
 *
 * @example
 * // route instructions
 * <admin-map
 *   [lat]="lat"
 *   [lng]="lng"
 *   [route]="route"
 *   (instruction)="instructionHandler($event)"
 * ></admin-map>
 */
@Component({
  selector: 'admin-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
  @Input() lat: number;
  @Input() lng: number;
  @Input() markers: IMarker[] = [];
  @Input() geocode: boolean = false;
  @Input() polyline: IPolyline;
  @Input() overlay: IOverlay;
  @Input() polygon: IPolygon;
  @Input() route: IRoute;
  @Input() routeInterval = 500;
  @Input() height = '300px';
  @Output() mapClick = new EventEmitter<any>();
  @Output() mapDragend = new EventEmitter<any>();
  @Output() markerClick = new EventEmitter<any>();
  @Output() instruction = new EventEmitter<string>();

  @ViewChild('div') private div: any;
  private map: any;
  private searchTerms: Subject<string>;
  private routingStarted = false;

  ngAfterViewInit(): void {
    this.div.nativeElement.style.height = this.height;
    this.setupMap();
    this.setupMarkers();
    this.setupGeocode();
    this.drawPolyline();
    this.drawOverlay();
    this.drawPolygon();
  }

  onKeyup(q: string): void {
    this.searchTerms.next(q);
  }

  startRouting(): void {
    if (!this.route || this.routingStarted) {
      return;
    }

    this.routingStarted = true;
    const routeSubject = new Subject<any>();
    const options = {
      step: (e: any): void => {
        routeSubject.next(e);
      },
    };
    this.map.travelRoute(Object.assign(options, this.route));

    routeSubject
      .zip(Observable.interval(this.routeInterval), (e, i) => e)
      .subscribe((e: any) => {
        this.instruction.emit(e.instructions);
        this.map.drawPolyline({
          path: e.path,
          strokeColor: '#f246ec',
          strokeOpacity: 0.8,
          strokeWeight: 6,
        });
        const latlng = e.path[e.path.length - 1];
        this.map.setCenter(latlng.lat(), latlng.lng());
      });
  }

  private setupMap(): void {
    this.map = new GMaps({
      div: this.div.nativeElement,
      lat: this.lat,
      lng: this.lng,
      click: (e: any) => this.mapClick.emit(e),
      dragend: (e: any) => this.mapDragend.emit(e),
    });
  }

  private setupMarkers(): void {
    const markerOptions = {
      click: (e: any) => this.markerClick.emit(e),
    };
    this.markers.forEach((marker) => {
      this.map.addMarker(Object.assign({}, markerOptions, marker));
    });
  }

  private setupGeocode(): void {
    if (!this.geocode) {
      return;
    }

    this.searchTerms = new Subject<string>();
    this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((q: string) => {
        return Observable.create((observer: Observer<any>) => {
          GMaps.geocode({
            address: q,
            callback(results: any, status: string) {
              if (status === 'OK') {
                const latlng = results[0].geometry.location;
                observer.next(latlng);
                observer.complete();
              }
            },
          });
        });
      })
      .subscribe((latlng: any) => {
        this.map.setCenter(latlng.lat(), latlng.lng());
        this.map.addMarker({ lat: latlng.lat(), lng: latlng.lng() });
      });
  }

  private drawPolyline(): void {
    if (!this.polyline) {
      return;
    }

    const defaultOptions = {
      strokeColor: '#f73b6d',
      strokeOpacity: 0.8,
      strokeWeight: 6,
    };
    this.map.drawPolyline(Object.assign(defaultOptions, this.polyline));
  }

  private drawOverlay(): void {
    if (!this.overlay) {
      return;
    }

    this.map.drawOverlay(this.overlay);
  }

  private drawPolygon(): void {
    if (!this.polygon) {
      return;
    }

    const defaultOptions = {
      strokeColor: '#2aa4f7',
      strokeOpacity: 1,
      strokeWeight: 3,
      fillColor: '#2aa4f7',
      fillOpacity: 0.6,
    };
    this.map.drawPolygon(Object.assign(defaultOptions, this.polygon));
  }
}
