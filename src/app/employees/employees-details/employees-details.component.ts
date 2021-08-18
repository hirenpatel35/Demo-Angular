import { Component, OnInit, Input,Output, EventEmitter, OnChanges, OnDestroy } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeesService } from '../services/employees.service';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-employees-details',
  templateUrl: './employees-details.component.html',
  styleUrls: ['./employees-details.component.css']
})
export class EmployeesDetailsComponent  implements OnChanges, OnDestroy {

  constructor(private _employeesService: EmployeesService) { }
/*
  ngOnInit(): void {
  }*/

 // public employeeId: number;
  public employeeDetails:Employee;
  @Input() public employeeId: number;
  @Output() childToParent = new EventEmitter<string>();
  private _employeeServicesSubscription: Subscription;

  ngOnChanges():void {

    this._employeeServicesSubscription =  this._employeesService.getEmployeeDetails(this.employeeId).subscribe(
      data => this.employeeDetails = data,
      error => console.log(error),
      () => console.log("all service call completed")
    );
  }

  updateChildToParent() {
    this.childToParent.emit("Hello");
  }

  ngOnDestroy():void{
    if (this._employeeServicesSubscription) {
      this._employeeServicesSubscription.unsubscribe();

    }
  }

}
