import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import 'bootstrap/js/tab';
import $ = require('jquery');
import 'jquery-sparkline';

const nyanCat = require('../../../../assets/demo/Nyan_cat_250px_frame.jpg');

@Component({
  selector: 'admin-dashboard-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DashboardDataComponent implements AfterViewInit {
  barData = {
    columns: [
      ['vim', 50, 40, 25, 17, 30, 28, 70],
      ['emacs', 10, 30, 25, 32, 42, 20, 20],
    ],
    type: 'bar',
    group: true,
    showLegend: false,
    colorPattern: ['rgb(222, 188, 133)', 'rgb(234, 133, 100)'],
  };

  @ViewChild('sparkline1') sparkline1: ElementRef;
  @ViewChild('sparkline2') sparkline2: ElementRef;
  @ViewChild('sparkline3') sparkline3: ElementRef;

  data1 = [8, 2, 0, 0, 8, 4, 1, 7, 2, 9];
  data2 = [5, 1, 8, 9, 3, 5, 9, 6, 8, 3];
  data3 = [4, 5, 6, 8, 5, 7, 6, 7, 7, 8];

  friends = [{
    picture: nyanCat,
    name: 'Nyan Cat 1',
    invited: false,
  }, {
    picture: nyanCat,
    name: 'Nyan Cat 2',
    invited: true,
  }, {
    picture: nyanCat,
    name: 'Nyan Cat 3',
    invited: false,
  }, {
    picture: nyanCat,
    name: 'Nyan Cat 4',
    invited: false,
  }, {
    picture: nyanCat,
    name: 'Nyan Cat 5',
    invited: false,
  }, {
    picture: nyanCat,
    name: 'Nyan Cat 6',
    invited: true,
  }, {
    picture: nyanCat,
    name: 'Nyan Cat 7',
    invited: false,
  }];

  donutData = {
    type: 'donut',
    columns: [
      ['a', 22],
      ['b', 42],
      ['c', 30],
      ['d', 17],
      ['e', 23],
    ],
    colorPattern: [
      'rgb(243, 197, 187)',
      'rgb(237, 188, 108)',
      'rgb(235, 160, 104)',
      'rgb(222, 188, 133)',
      'rgb(234, 133, 100)',
    ],
  };

  ngAfterViewInit() {
    setTimeout(() => this.initSparklines(), 0);
  }

  onFriendClick(friend: any): void {
    friend.invited = !friend.invited;
  }

  private initSparklines(): void {
    for (let i = 1; i <= 3; i++) {
      ($(this[`sparkline${i}`].nativeElement) as any)
        .sparkline(this[`data${i}`], {
          type: 'bar',
          barColor: '#fff',
        });
    }
  }
}
