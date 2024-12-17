import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';

import { environment } from '../../../environments/environments';
import { AuthStatus, LoginResponse, User } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = environment.baseURL;
  private http = inject(HttpClient);

  private _currentUser = signal<User|null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  //! Al mundo exterior
  public currentUser = computed( () => this._currentUser() );
  public authStatus = computed( () => this._authStatus() );


  constructor() { }

  login(email: string, password: string): Observable<boolean> {

    const url = `${this.baseUrl}/auth/login`;
    const body = { email, password};

    return this.http.post<LoginResponse>(url, body)
      .pipe(
        tap(({user, token}) => {
          this._currentUser.set(user);
          this._authStatus.set(AuthStatus.authenticated);
          localStorage.setItem('token', token);
          console.log({user, token});

        }),
        map(() => true),

        catchError( err =>  throwError(() => err.error.message)
        )
      )

  }
}
