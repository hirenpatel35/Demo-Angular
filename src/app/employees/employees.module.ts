import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import {HttpClientModule} from '@angular/common/http'
import { EmployeesService } from './services/employees.service';
import { EmployeesDetailsComponent } from './employees-details/employees-details.component';
import { EmployeesRoutingModule } from './employees-routing.module';



@NgModule({
  declarations: [
    EmployeesListComponent,
    EmployeesDetailsComponent

  ],
  imports: [
    CommonModule,
    //HttpClientModule,
    EmployeesRoutingModule
  ],
  exports:[EmployeesListComponent],
  providers:[EmployeesService]
})
export class EmployeesModule { }
