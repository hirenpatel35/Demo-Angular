import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuardService } from '../route-guard.service';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: "",
    component: LoginComponent,

  },
  {
    path: "login",
    component: LoginComponent,

  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class SecurityRoutingModule { }


