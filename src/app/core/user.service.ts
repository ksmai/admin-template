import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  getUser(): Observable<{ name: string, avatar: string }> {
    return Observable.of({
      name: 'Nyan Cat',
      avatar: require('../../../assets/demo/Nyan_cat_250px_frame.jpg'),
    });
  }
}
