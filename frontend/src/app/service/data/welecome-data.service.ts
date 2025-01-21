import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean {
  constructor (private message:string) {}
}

@Injectable({
  providedIn: 'root'
})

export class WelecomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService(name: string){

    // let basicAuthHeaderString = this.createBasicAuthenticationHeader();
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })
   return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`)
  }

  // createBasicAuthenticationHeader()
  // {
  //   let username = 'user'
  //   let password = 'password'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)
  //   return basicAuthHeaderString;
  // }
}


//Access to XMLHttpRequest at 'http://localhost:8080/login' (redirected from 'http://localhost:8080/hello-world/path-variable/in28minutes') from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.