import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegisterRequestInteface} from '../types/registerRequest.interface';
import {Observable, map} from 'rxjs';
import {CurrentUserInteface} from 'src/app/shared/types/currentUser.interface';
import {AuthResponseInterface} from '../types/auth-response.interface';
import {environment} from 'src/environments/environment.development';
import {LoginRequestInteface} from '../types/loginRequest.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(response: AuthResponseInterface): CurrentUserInteface {
    return response.user;
  }

  register(data: RegisterRequestInteface): Observable<CurrentUserInteface> {
    const url = environment.apiUrl + '/users';
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser));
  }

  login(data: LoginRequestInteface): Observable<CurrentUserInteface> {
    const url = environment.apiUrl + '/users/login';
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser));
  }
}
