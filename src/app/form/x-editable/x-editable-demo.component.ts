import { Component } from '@angular/core';

/**
 * Demonstrate the usage of {@link FormXEditableComponent}
 * Some examples from https://vitalets.github.io/x-editable/demo-bs3.html
 */
@Component({
  templateUrl: './x-editable-demo.component.html',
  styleUrls: ['./x-editable-demo.component.scss'],
})
export class XEditableDemoComponent {
  typeahead = {
    name: 'state',
    local: [
      'Alabama',
      'Alaska',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado',
      'Connecticut',
      'Delaware',
      'Florida',
      'Georgia',
      'Hawaii',
      'Idaho',
      'Illinois',
      'Indiana',
      'Iowa',
      'Kansas',
      'Kentucky',
      'Louisiana',
      'Maine',
      'Maryland',
      'Massachusetts',
      'Michigan',
      'Minnesota',
      'Mississippi',
      'Missouri',
      'Montana',
      'Nebraska',
      'Nevada',
      'New Hampshire',
      'New Jersey',
      'New Mexico',
      'New York',
      'North Carolina',
      'North Dakota',
      'Ohio',
      'Oklahoma',
      'Oregon',
      'Pennsylvania',
      'Rhode Island',
      'South Carolina',
      'South Dakota',
      'Tennessee',
      'Texas',
      'Utah',
      'Vermont',
      'Virginia',
      'Washington',
      'West Virginia',
      'Wisconsin',
      'Wyoming',
    ],
    template(item: any) {
      return item.value;
    },
  };

  select2source = [
    {id: 'gb', text: 'Great Britain'},
    {id: 'us', text: 'United States'},
    {id: 'ru', text: 'Russia'},
  ];

  mode = 'popup';
  disabled = false;
}
