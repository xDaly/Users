import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TestService {

  usersUrl = 'http://localhost:3000/users';
  

  getConfig() {
    return this.http.get(this.usersUrl);
  }

  userslist: any;

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };


  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3000/users').subscribe(
      users=>{ 
 this.userslist = users as string [];

    })
}


deleteuser (id: number): Observable<{}> {
  const url = `${this.usersUrl}/${id}`;
  return this.http.delete(this.usersUrl, this.httpOptions)
    
    
}
   
  



}
