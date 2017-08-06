import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import 'bootstrap/js/tab';
import 'switchery/dist/switchery.css';

const Switchery = require('switchery/dist/switchery');

/**
 * Renders demographics inside dashboard
 */
@Component({
  selector: 'admin-dashboard-demographics',
  templateUrl: './demographics.component.html',
  styleUrls: ['./demographics.component.scss'],
})
export class DashboardDemographicsComponent implements AfterViewInit, OnDestroy {
  visitorData = {
    x: 'Year',
    columns: [
      ['Year', 2014, 2015, 2016, 2017],
      ['Male', 5, 10, 7, 11],
      ['Female', -10, -8, -7, -14],
    ],
    type: 'bar',
    group: true,
    colorPattern: ['#a5c7ec', '#e394b3'],
  };
  @ViewChild('twitterSwitch') twitterSwitch: ElementRef;
  @ViewChild('facebookSwitch') facebookSwitch: ElementRef;
  @ViewChild('googleSwitch') googleSwitch: ElementRef;
  @ViewChild('linkedinSwitch') linkedinSwitch: ElementRef;

  private switcheries: any[];

  ngAfterViewInit() {
    setTimeout(() => this.initSwitchery(), 0);
  }

  ngOnDestroy() {
    this.switcheries.forEach((switchery) => {
      switchery.destroy();
    });
  }

  private initSwitchery(): void {
    this.switcheries = ['twitter', 'facebook', 'google', 'linkedin']
      .map((com) => {
        return new Switchery(this[`${com}Switch`].nativeElement, {
          size: 'small',
        });
      });
  }
}
