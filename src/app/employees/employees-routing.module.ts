import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { RouteGuardService } from '../route-guard.service';


const routes: Routes = [
  {
    path: "",
    component: EmployeesListComponent,
    canActivate:[RouteGuardService]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class EmployeesRoutingModule { }


