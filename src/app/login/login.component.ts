import { Component, OnInit } from '@angular/core';
import { HttpHeaders , HttpClient} from '@angular/common/http'; 
import {UserService} from "../user.service";
import {loginuser} from "../model/loginuser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginuser : loginuser[]= []; 
  errorrespon = false;
  descriptions = "";
  coderes = 404; 
  show = "show";

  months = ["January", "February", "March", "April",
  "May", "June", "July", "August", "September",
  "October", "November", "December"];
  isavailable = false;



  constructor(
    private http: HttpClient,
    private UserService: UserService,
    private router: Router
  ) { 


  }

  ngOnInit() {
  }
  private products  = []; 
  onClickSubmit(data) {
    console.log("Entered Email id : " + data.email);
    // this.http.post("https://afternoon-lake-33785.herokuapp.com/api/eks/login", data )
    // .subscribe(
    //   (res:any)=>{
    //   console.log(res.data);
    // }, (error)=>{
    //   console.log(error.error);
    // });

    this.UserService.getLogin(data)
    
     .subscribe(  
      (res:any)=>{
        this.loginuser = res.data;
        this.errorrespon = false;
        this.coderes = res.code;
        localStorage.setItem('token', res.data.token);

        this.router.navigate(['user']);
      }, (error) =>{
        this.errorrespon = true;
        this.descriptions = error.error.descriptions;
        console.log(error.error.code);
      });
      
 }

 changemonths(event) {
  console.log(event);
  this.isavailable = true;
}

myClickFunction(event) {
  this.isavailable = false;
}

 


closeAlert() {
   console.log(this);
   this.show='hide';
}


}

