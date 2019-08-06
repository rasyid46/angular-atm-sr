import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }
  httpdata;
  ngOnInit() {
    this.http.get("http://jsonplaceholder.typicode.com/users").
    subscribe((data) => 
    this.displaydata(data)
    );
 }
 title = 'sule';
 displaydata(data) {this.httpdata = data;}
 private products  = []; 


 get_products(){
  this.http.get("https://jsonplaceholder.typicode.com/todos")
    .subscribe((res)=>{
      console.log(res);
      this.products = res;
  });
}

detail_user(id){

  console.log(id);
  
}
