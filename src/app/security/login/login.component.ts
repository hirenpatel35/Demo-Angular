import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { Subscription } from 'rxjs';
import { SecurityService } from '../services/security.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public user: User;
  private _authResponse: AuthResponse;
  private _subscription: Subscription;
  private _returnURL:string;

  public number1:10
  public number2:10;

  constructor(private _securityService: SecurityService, private _router : Router, private _activatedRoute : ActivatedRoute) {
    this.user = new User();
  }

  test():void{
    console.log(this.user.EMail+this.user.Password)
  }

  ngOnInit(): void {
    this._returnURL = this._activatedRoute.snapshot.queryParamMap.get("returnUrl")
  }

  login = (event) => {
    event.preventDefault();

    this._subscription = this._securityService.login(this.user).subscribe(
      data => {
        this._authResponse = data
        if (this._authResponse.Success) {
          document.cookie = `token=${this._authResponse.Token}`;

          if (this._returnURL) {
            this._router.navigate([this._returnURL])
          }else{
            this._router.navigate(["/home"])
          }

        }
        console.log(data);
      },
      error => console.log(error)

    )

  }

  ngOnDestroy(): void {

    if (this._subscription) {
      this._subscription.unsubscribe()
    }
  }

}
