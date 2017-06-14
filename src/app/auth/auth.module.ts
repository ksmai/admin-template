import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule,
  ],

  declarations: [
    LoginComponent,
    SignupComponent,
    LockComponent,
  ],
})
export class AuthModule {
}
