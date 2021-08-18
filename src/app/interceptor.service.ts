import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  private _loginURL = "http://localhost:4200/login";
  constructor(private _appService: AppService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!req.url.includes(this._loginURL)) {
      console.log("intercept")


      const requestClone = req.clone({
        setHeaders: { "Authorization": `Bearer ${this._appService.getCookie("token")}` }
        //headers: req.headers.set("Authorization", `Bearer ${this._appService.getCookie("token")}`)
      })
      return next.handle(requestClone);
    }
    return next.handle(req);
  }
}
