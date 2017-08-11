import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import $ = require('jquery');

import 'bootstrap/js/tab';
import 'jquery-sparkline';

import { SidenavAlertsComponent } from './alerts/sidenav-alerts.component';
import { SidenavGraphsComponent } from './graphs/sidenav-graphs.component';

@Component({
  selector: 'admin-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnChanges, AfterViewInit, OnDestroy {
  @Input() color: string;
  classes: { [key: string]: boolean };

  @ViewChild('graphsTab') graphsTab: ElementRef;
  @ViewChild('alertsTab') alertsTab: ElementRef;
  @ViewChild(SidenavGraphsComponent) graphsComp: SidenavGraphsComponent;
  @ViewChild(SidenavAlertsComponent) alertsComp: SidenavAlertsComponent;

  ngAfterViewInit() {
    ($(this.graphsTab.nativeElement) as any).one('shown.bs.tab', () => {
      this.graphsComp.initSparklines();
    });
    ($(this.alertsTab.nativeElement) as any).one('shown.bs.tab', () => {
      this.alertsComp.initSparklines();
    });
  }

  ngOnDestroy() {
    ($(this.graphsTab.nativeElement) as any).off('shown.bs.tab');
    ($(this.alertsTab.nativeElement) as any).off('shown.bs.tab');
  }

  ngOnChanges() {
    this.classes = {
      [`sidenav sidenav--${this.color}`]: true,
    };
  }
}
