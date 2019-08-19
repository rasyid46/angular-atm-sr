import { Component, OnInit } from '@angular/core';
import {Employee} from '../model/employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() {
    this.today =new Date();

   }

  todaydate = new Date();

  private employee: Employee[] = [
    new Employee(1,'Andri','2018-01-02','2000'),
    new Employee(2,'zz','2018-01-02','2000'),
  ];

 
  getEmployee() {
    return this.employee.slice();
  }
  

  addEmployee(employeeID: number  , employeeName: string, employeeDob: string,employeeSalary : string){
    this.employee.push({id : employeeID , name: employeeName , date_born : employeeDob, salary : employeeSalary});
    console.log(employeeID,employeeName,employeeDob,employeeSalary);
  }

  deleteEmpp(id:number){
  

    let updatedEmp = [];
    for (let el of this.employee) {

        if (el.id !== id) {
          console.log(id);
          updatedEmp.push(el);
        }
    }
    this.employee = updatedEmp;
  }
  editEmpp(id){
    console.log(id);
  }


}
