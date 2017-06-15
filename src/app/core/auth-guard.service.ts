import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {
  }

  canActivate() {
    return this.userService
      .getUser()
      .map((user) => !!user)
      .do((isLoggedIn) => {
        if (!isLoggedIn) {
          this.router.navigate(['/login']);
        }
      });
  }
}
