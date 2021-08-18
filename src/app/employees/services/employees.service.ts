import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeesService {

  constructor(private _httpClient: HttpClient) { }

  private _serviceUrl: string = "https://localhost:44356/Api/";

  public getEmployees = (): Observable<Employee[]> => {
    return this._httpClient.get<Employee[]>(`${this._serviceUrl}Employees`)
  }

  public getEmployeeDetails = (employeeId: number): Observable<Employee> => {
    return this._httpClient.get<Employee>(`${this._serviceUrl}Employees/${employeeId}`)
  }

}
