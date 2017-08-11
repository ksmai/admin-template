import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Render the signup page
 */
@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  facebookLogin = require('../../../../assets/facebook-login.png');
  twitterLogin = require('../../../../assets/twitter-login.png');

  constructor(private router: Router) {
  }

  onSignup(): void {
    this.router.navigate(['/']);
  }
}
