import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubUser {

  constructor(private http: HttpClient) {  }

  getUserDetails(username): Observable<any> {
    return this.http.get<any>("http://api.github.com/users/"+username);
  }

}
