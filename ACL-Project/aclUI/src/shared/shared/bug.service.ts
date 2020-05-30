import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../bug';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BugService {
  //baseurl = 'http://localhost:3000';
  baseurl='/api/webapi/v1/'
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'

    })
}
    /*
httpOptions={
  headers:new HttpHeaders()
  .set('Content-Type','application/json')
  .set('Cache-Control','no-cache')
  .set('Access-Control-Allow-Origin', '*')
  .set('method', 'POST')
}*/
    // POST  login
    CreateBug(data): Observable<any> {
      return this.http.post<any>(this.baseurl+'loginmaster', JSON.stringify(data), this.httpOptions )
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
    }  
  
	//POST  create user
	CreateUserBug(data): Observable<any> {
      return this.http.post<any>(this.baseurl+'user', JSON.stringify(data), this.httpOptions )
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
    }  

	CreateGroupBug(data): Observable<any> {
      return this.http.post<any>(this.baseurl+'groups', JSON.stringify(data), this.httpOptions )
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
    }  

   
	//GETALL users

	// GET
    GetAllUsers(): Observable<any[]> {
      return this.http.get<any[]>(this.baseurl+'user')
      .pipe(
        retry(1),
         catchError(this.errorHandl)
       );
     }




	//
	// DELETE user
    DeleteUser(id){
      return this.http.delete(this.baseurl +'user/'+ id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
	}

	//GET all users
	GetUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl + 'user')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

	GetGroupMembrs(): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl + 'groups')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }


  GetGroupMembrss(): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl + 'usergroup')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }


// GET user by Id
    GetIssue(id): Observable<any> {
      return this.http.get<any>(this.baseurl+'user/'+ id)
      .pipe(
       retry(1),
        catchError(this.errorHandl)
      );
    }
  


	// PUT
   UpdateUser(id, data): Observable<any> {
    return this.http.put<any>(this.baseurl + 'user/' + id, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

	getUserById(id){
      return this.http.get(this.baseurl +'user/'+ id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
	}

    // Error handling
    errorHandl(error) {
       let errorMessage = '';
       if(error.error instanceof ErrorEvent) {
         // Get client-side error
         errorMessage = error.error.message;
       } else {
         // Get server-side error
         errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
       }
       console.log(errorMessage);
       return throwError(errorMessage);
    }
  
}
