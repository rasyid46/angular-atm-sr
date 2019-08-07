import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {user} from './model/user'; 
import {todo} from './model/todo' ;
import {loginuser} from './model/loginuser';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /** GET heroes from the server */
  getUsers (): Observable<user[]> {
    return this.http.get<user[]>('http://jsonplaceholder.typicode.com/users')
      .pipe(
        tap(heroes => this.log('fetched heroes')),
        catchError(this.handleError('getHeroes', []))
      );
  }

  getTodo() : Observable<todo[]>{
    return this.http.get<todo[]>('https://jsonplaceholder.typicode.com/todos')
     .pipe(
       tap(todos => this.log('fetched todo')),
       catchError(this.handleError('todos ',[]))
     );
  }

  getLogin (loginuser: loginuser): Observable<loginuser> {
    return this.http.post<loginuser>("https://afternoon-lake-33785.herokuapp.com/api/eks/login", loginuser).pipe(
      tap(
        (res:any)=>{
            console.log(res.data);
          },(error)=>{
              console.log(error.error);
            }
      )
      );
  }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
      this.messageService.add(`HeroService: ${message}`);
    }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error.error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.error}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
