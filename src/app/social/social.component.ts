import { Component } from '@angular/core';

const nyanCat = require('../../../assets/demo/Nyan_cat_250px_frame.jpg');

/**
 * Renders the social media like page
 */
@Component({
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class SocialComponent {
  liked = false;
  likes = 999;
  followed = false;

  commentsForBird = [{
    avatar: nyanCat,
    name: 'Nyan Cat 43',
    time: '42 seconds ago',
    message: 'Awesome!',
  }, {
    avatar: nyanCat,
    name: 'Nyan Cat 44',
    time: '24 seconds ago',
    message: 'Fantastic!',
  }, {
    avatar: nyanCat,
    name: 'Nyan Cat 42',
    time: 'Few seconds ago',
    message: 'Thanks people (cats)!',
  }];

  commentsForVideo = [{
    avatar: nyanCat,
    name: 'Nyan Cat 42',
    time: '9 hours ago',
    message: 'nyan nyan nyan nyan nyan nyan nyan nyan nyan nyan nyan nyan nyan nyan nyan nyan',
  }, {
    avatar: nyanCat,
    name: 'Nyan Cat 42000',
    time: '7 hours ago',
    message: 'nyan nyan nyan nyan nyan nyan nyan nyan nyan',
  }];

  onLike(): void {
    if (!this.liked) {
      this.liked = true;
      this.likes += 1;
    }
  }

  onFollow(): void {
    this.followed = true;
  }
}
