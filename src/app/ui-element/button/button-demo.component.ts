import { Component } from '@angular/core';

/**
 * Demonstrate the usage of ButtonComponent
 */
@Component({
  templateUrl: './button-demo.component.html',
  styleUrls: ['./button-demo.component.scss'],
})
export class ButtonDemoComponent {
  sizes = ['lg', 'default', 'sm', 'xs'];
  tags = ['default', 'primary', 'success', 'info', 'warning', 'danger'];
  colors = [
    'deepred', 'red', 'lightred', 'brightblue', 'darkblue', 'blue',
    'lightblue', 'purple', 'lightpurple', 'darkbrown', 'brown', 'brown75',
    'brown60', 'brown50', 'brownishgreen', 'orange', 'paleorange',
    'pinkishred', 'orange75', 'orange65', 'orange45', 'darkorange',
    'lightorange', 'darkgreen', 'darkgreen85', 'darkgreen75',
    'darkgreen65', 'darkgreen55', 'darkgreen50', 'darkgreen45',
    'darkgreen40', 'green', 'lightgreen', 'brightyellow',
    'brightyellow75', 'brightyellow65', 'yellow', 'paleyellow',
    'lightyellow', 'pink', 'lightpink', 'paleblue', 'palegreen',
    'palepink', 'brownishgray', 'brownishgray75', 'darkgray',
    'darkgray75', 'darkgray50', 'darkgray40', 'darkgray25', 'black',
    'black75', 'davygray', 'darkgrayishblue75', 'darkgrayishblue',
    'desaturateddarkblue', 'desaturateddarkblue75', 'darkcyan',
    'grayishcyan',
  ];

  expandSize(size: string): string {
    switch (size) {
      case 'lg':
        return 'Large';
      case 'sm':
        return 'Small';
      case 'xs':
        return 'Extra small';
      default:
        return 'Default';
    }
  }
}
