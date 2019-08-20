import { Component, OnInit } from '@angular/core';
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
  
  addEmployee(employeeID: number  , employeeName: string, employeeDob: string,employeeSalary : string){
    let objIndex = this.findbyId(employeeID);
    if(objIndex == -1){
      this.employee.push({id : employeeID , name: employeeName , date_born : employeeDob, salary : employeeSalary});
    }else{
      this.employee[objIndex].name = employeeName;
      this.employee[objIndex].date_born = employeeDob;
      this.employee[objIndex].date_born = employeeSalary;
    }   
    console.log(employeeID,employeeName,employeeDob,employeeSalary);
  }

  deleteEmpp(id:number){
    let objIndex =this.findbyId(id);
    this.employee.splice(objIndex, 1);
  }

  editEmpp(id){
    let objIndex = this.findbyId(id);
    this.employee[objIndex].name = "Laila";
  }

  findbyId(id){
    let objIndex = this.employee.findIndex((obj => obj.id == id));
    return objIndex;
  }


}
