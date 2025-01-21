import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';


export const AUTHENTICATED_USER = 'authenticaterUser';
export const TOKEN = 'token'

@Injectable({
  providedIn: 'root'
})


export class BasicAuthentificationService {

  constructor(
    private http:HttpClient
  ) { }


  executeJwtAuthenticationService(username: string, password: string){

   return this.http.post<any>(`${API_URL}/authenticate`, { username, password }).pipe(
    map(
      data => {
        sessionStorage.setItem(AUTHENTICATED_USER, username);
        sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);

        return true;
      }
    )
   )
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken(){
       return sessionStorage.getItem(TOKEN)
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user == null)
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }

  executeAuthenticationService(username: string, password: string){

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)
  
     let headers = new HttpHeaders({
       Authorization: basicAuthHeaderString
     })
   return this.http.get<AuthenticationdBean>(`${API_URL}/basicauth`, { headers }).pipe(
    map(
      data => {
        sessionStorage.setItem(AUTHENTICATED_USER, username);
        sessionStorage.setItem(TOKEN, basicAuthHeaderString);

        return true;
      }
    )
   )
  }

  
}
export class AuthenticationdBean {
  constructor (private message:string) {}
}
