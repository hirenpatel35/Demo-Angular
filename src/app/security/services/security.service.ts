import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from '../models/auth-response';
import { User } from '../models/user';

@Injectable()
export class SecurityService {

  constructor(private _httpClient: HttpClient) { }
  private _serviceURL : string ="https://localhost:44356/Api/";

  login(user: User): Observable<AuthResponse> {
    return this._httpClient.post<AuthResponse>(`${this._serviceURL}login`, user, {
      headers: { "Content-Type": "application/json" }
    });
  }
}
