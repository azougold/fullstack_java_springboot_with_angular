import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthentificationService } from '../basic-authentification.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuthenticationService: BasicAuthentificationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    // let username = 'user'
    // let password = 'password'
    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)

    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser();

    if(basicAuthHeaderString && username){
        request = request.clone({
        setHeaders :{
          Authorization: basicAuthHeaderString
        }
      })
    }
    console.log(request);
    return next.handle(request);


    
  }
}
