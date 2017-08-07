import { Component, Input } from '@angular/core';

export interface IComment {
  avatar: string;
  name: string;
  message: string;
  time: string;
}

/**
 * Renders a post in the social page
 */
@Component({
  selector: 'admin-social-post',
  templateUrl: './social-post.component.html',
  styleUrls: ['./social-post.component.scss'],
})
export class SocialPostComponent {
  @Input() avatar: string;
  @Input() name: string;
  @Input() location: string;
  @Input() time: string;
  @Input() likes: number;
  @Input() comments: IComment[];
}
