import { Component, OnInit } from '@angular/core';
import { HttpHeaders , HttpClient} from '@angular/common/http'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }
  private products  = []; 
  onClickSubmit(data) {
    // alert("Entered Email id : " + data.emailid);
    
    this.http.post("https://afternoon-lake-33785.herokuapp.com/api/eks/login", data )
    .subscribe(
      (res:any)=>{
      console.log(res.data);
    }, (error)=>{
      console.log(error.error);
    });
 }


}
