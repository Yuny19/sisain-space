import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthenticationTokenService } from './service/authentication-token.service';
import { addName } from './store/lib/name.reducer';
import { NameInterface } from './store/model/name.model';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

  token: string;

  constructor(private authenticationTokenService: AuthenticationTokenService,
    private store: Store<{ nameReducers: NameInterface }>
  ) { }

  ngOnInit() {
    this.token = localStorage.getItem('token');

    if (this.token) {
      this.authenticationTokenService.authToken(this.token).subscribe((data) => {
        this.store.dispatch(addName(data.name));
      })
    }
  }
}
