import { Component, OnInit, OnDestroy} from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeesService } from '../services/employees.service';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
  //providers:[EmployeesService]


})
export class EmployeesListComponent implements OnInit, OnDestroy {

  constructor(private _employeesService: EmployeesService) { }


  public employeeSelected:Employee;
  public childMessage:string;
  //public employees: Employee[];
  public employees: Employee[] = [];
  public employeeId:number;
  private _employeeServicesSubscription: Subscription;

  ngOnInit(): void {

    this._employeeServicesSubscription = this._employeesService.getEmployees().subscribe(
      data => this.employees = data,
      err => console.log(err),
      () => console.log("Service Call Completed")
    );
  }

  public onSelectionEmployee(employeeId: number):void{
    console.log(employeeId)
    this.employeeId = employeeId;
  }

  public updateChildToParent(message:string){
    //alert(message)
    this.childMessage = message;
  }

  ngOnDestroy() :void {
    if (this._employeeServicesSubscription) {
      this._employeeServicesSubscription.unsubscribe();
    }
  }
}
