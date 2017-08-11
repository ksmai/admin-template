import { Component } from '@angular/core';

const birdImage = require('../../../../assets/demo/bird.jpeg');

/**
 * Render a post in the blog
 */
@Component({
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  birdImage = birdImage;
}
