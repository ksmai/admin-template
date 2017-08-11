import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Render the login page
 */
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  facebookLogin = require('../../../../assets/facebook-login.png');
  twitterLogin = require('../../../../assets/twitter-login.png');

  constructor(private router: Router) {
  }

  onLogin(): void {
    this.router.navigate(['/']);
  }
}
