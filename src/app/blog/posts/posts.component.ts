/* tslint:disable max-line-length */
import { Component } from '@angular/core';

export interface IBlogPost {
  picture: string;
  subject: string;
  author: string;
  date: string;
  extract: string;
  tag: string;
  comments: number;
  shares: number;
  likes: number;
}

/**
 * Render a list of blog posts
 */
@Component({
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  nyanCat = require('../../../../assets/demo/Nyan_cat_250px_frame.jpg');

  posts: IBlogPost[] = [{
    picture: require('../../../../assets/demo/bird.jpeg'),
    subject: 'Some story about a bird',
    author: 'Insert author name here',
    date: '8 Aug 2017',
    extract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
    tag: 'LoremIpsum',
    comments: 42,
    shares: 10,
    likes: 7,
  }, {
    picture: require('../../../../assets/demo/desk.jpeg'),
    subject: 'Some story about a desk',
    author: 'Desk owner',
    date: '7 Aug 2017',
    extract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
    tag: 'DeskLife',
    comments: 24,
    shares: 1,
    likes: 32,
  }, {
    picture: require('../../../../assets/demo/grass.jpeg'),
    subject: 'Just a photo',
    author: 'Photographer',
    date: '6 Aug 2017',
    extract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
    tag: 'photo',
    comments: 300,
    shares: 24,
    likes: 36,
  }];

  tags = ['Javascript', 'Python', 'C', 'Ada', 'Huskell', 'Elixir', 'Rust',
    'Java', 'Go', 'Perl', 'Cobol', 'Ruby'];
}
