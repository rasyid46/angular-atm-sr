import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import {Employee} from '../model/employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  private employee: Employee[] = [
    new Employee(1,'Andri','2018-01-02','2000'),
    new Employee(2,'zz','2018-01-02','2000'),
  ];

 
  idemp = '';
  nameemp ='';
  dateborn='';
  salaryemp ='';

  addEmployee(employeeID: number  , employeeName: string, employeeDob: string,employeeSalary : string){
    let objIndex = this.findbyId(employeeID);
    if(objIndex == -1){
      this.employee.push({id : employeeID , name: employeeName , date_born : employeeDob, salary : employeeSalary});
    }else{
      this.employee[objIndex].name = employeeName;
      this.employee[objIndex].date_born = employeeDob;
      this.employee[objIndex].salary = employeeSalary;
    }   
    console.log(employeeID,employeeName,employeeDob,employeeSalary);
  }

  deleteEmpp(id:number){
    let objIndex =this.findbyId(id);
    this.employee.splice(objIndex, 1);
  }

  editEmpp(id,name,date_born,salary){
    // let objIndex = this.findbyId(id);
    // this.employee[objIndex].name = "Laila";
    this.idemp= id;
    this.nameemp = name;
    this.dateborn = date_born;
    this.salaryemp = salary;
  }

  findbyId(id){
    let objIndex = this.employee.findIndex((obj => obj.id == id));
    return objIndex;
  }


}
