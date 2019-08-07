import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {user} from "../model/user";
import {todo} from "../model/todo";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title = 'sule';
  products: any; 
  user: user[] = [];
  todo : todo[]= []; 

  constructor(
    private UserService: UserService
    ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.UserService.getUsers()
    .subscribe(user => this.user = user);
  }


  get_products(){
    this.UserService.getTodo()
     .subscribe(todo =>this.todo = todo);
  }

  detail_user(id){
    console.log(id);
  }

}
