import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import $ = require('jquery');
import 'blueimp-gallery/css/blueimp-gallery.min.css';

const Gallery = require('blueimp-gallery/js/blueimp-gallery.min');

/**
 * Renders the gallery
 */
@Component({
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnDestroy {
  @ViewChild('container') containerEl: ElementRef;

  images = [{
    title: 'Bird 1',
    description: 'Just a bird',
    href: '../../../assets/demo/bird.jpeg',
    type: 'image/jpeg',
    likes: 42,
    liked: false,
  }, {
    title: 'Desk 1',
    description: 'Just a desk',
    href: '../../../assets/demo/desk.jpeg',
    type: 'image/jpeg',
    likes: 42,
    liked: false,
  }, {
    title: 'Grass 1',
    description: 'Just some grass',
    href: '../../../assets/demo/grass.jpeg',
    type: 'image/jpeg',
    likes: 30,
    liked: true,
  }, {
    title: 'Bird 2',
    description: 'Just a bird',
    href: '../../../assets/demo/bird.jpeg',
    type: 'image/jpeg',
    likes: 42,
    liked: false,
  }, {
    title: 'Desk 2',
    description: 'Just a desk',
    href: '../../../assets/demo/desk.jpeg',
    type: 'image/jpeg',
    likes: 12,
    liked: true,
  }, {
    title: 'Grass 2',
    description: 'Just some grass',
    href: '../../../assets/demo/grass.jpeg',
    type: 'image/jpeg',
    likes: 42,
    liked: false,
  }, {
    title: 'Bird 3',
    description: 'Just a bird',
    href: '../../../assets/demo/bird.jpeg',
    type: 'image/jpeg',
    likes: 100,
    liked: true,
  }, {
    title: 'Desk 3',
    description: 'Just a desk',
    href: '../../../assets/demo/desk.jpeg',
    type: 'image/jpeg',
    likes: 42,
    liked: false,
  }, {
    title: 'Grass 3',
    description: 'Just some grass',
    href: '../../../assets/demo/grass.jpeg',
    type: 'image/jpeg',
    likes: 42,
    liked: false,
  }];

  private gallery: any;

  ngOnDestroy() {
    this.cleanup();
  }

  onLike(i: number): void {
    const image = this.images[i];
    if (image.liked) {
      image.likes--;
    } else {
      image.likes++;
    }
    image.liked = !image.liked;
  }

  onOpen(i: number): void {
    this.gallery = Gallery(
      this.images.slice(i).concat(this.images.slice(0, i)),
      {
        container: this.containerEl.nativeElement,
      },
    );
  }

  private cleanup(): void {
    if (this.gallery) {
      this.gallery.close();
      this.gallery = null;
    }
  }
}
