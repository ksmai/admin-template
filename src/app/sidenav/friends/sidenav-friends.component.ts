import { Component } from '@angular/core';

const cat = require('../../../../assets/demo/Nyan_cat_250px_frame.jpg');

export interface IFriend {
  avatar: string;
  name: string;
}

/**
 * Renders the friends tab inside sidenav
 */
@Component({
  selector: 'admin-sidenav-friends',
  templateUrl: './sidenav-friends.component.html',
  styleUrls: ['./sidenav-friends.component.scss'],
})
export class SidenavFriendsComponent {
  onlineFriends = [{
    avatar: cat,
    name: 'Nyan Cat 1',
  }, {
    avatar: cat,
    name: 'Nyan Cat 2',
  }, {
    avatar: cat,
    name: 'Nyan Cat 3',
  }, {
    avatar: cat,
    name: 'Nyan Cat 4',
  }];

  idleFriends = [{
    avatar: cat,
    name: 'Nyan Cat 5',
  }, {
    avatar: cat,
    name: 'Nyan Cat 6',
  }, {
    avatar: cat,
    name: 'Nyan Cat 7',
  }];

  busyFriends = [{
    avatar: cat,
    name: 'Nyan Cat 8',
  }, {
    avatar: cat,
    name: 'Nyan Cat 9',
  }, {
    avatar: cat,
    name: 'Nyan Cat 10',
  }, {
    avatar: cat,
    name: 'Nyan Cat 11',
  }];

  offlineFriends = [{
    avatar: cat,
    name: 'Nyan Cat 12',
  }, {
    avatar: cat,
    name: 'Nyan Cat 13',
  }];
}
