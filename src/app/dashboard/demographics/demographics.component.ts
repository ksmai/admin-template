import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import 'bootstrap/js/tab';
import 'switchery/dist/switchery.css';

const Switchery = require('switchery/dist/switchery');

@Component({
  selector: 'admin-dashboard-demographics',
  templateUrl: './demographics.component.html',
  styleUrls: ['./demographics.component.scss'],
})
export class DashboardDemographicsComponent implements AfterViewInit {
  @ViewChild('twitterSwitch') twitterSwitch: ElementRef;
  @ViewChild('facebookSwitch') facebookSwitch: ElementRef;
  @ViewChild('googleSwitch') googleSwitch: ElementRef;
  @ViewChild('linkedinSwitch') linkedinSwitch: ElementRef;

  ngAfterViewInit() {
    ['twitter', 'facebook', 'google', 'linkedin']
      .forEach((com) => {
        return new Switchery(this[`${com}Switch`].nativeElement);
      });
  }
}
