import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthentificationService } from '../service/hardcoded-authentification.service';
import { BasicAuthentificationService } from '../service/basic-authentification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  username = 'MyUserName';
  password = '';
  errorMessage = 'Invalid credentials';
  invalidLogin = false;

  //Router
  //Angular.giveMeRouter
  //Dependency Injection

  constructor(private router: Router, 
    public hardcodedAuthentification: HardcodedAuthentificationService,
    public basicAuthenticationService: BasicAuthentificationService) {
    
  }

  // loginHandler() {
  //   console.log(this.password);
  //   // if(this.username == 'MyUserName' && this.password == 'dummy' ) 
  //   if(this.hardcodedAuthentification.authenticate(this.username,this.password) ) 

  //     {
  //       //redirect to  welcome page
  //       this.router.navigate(['welcome', this.username]);
  //       this.invalidLogin = false;
  //     } else {
  //       this.invalidLogin = true;
  //     }

  // }

  loginJwtBasicAuthHandler() {
    console.log(this.password);
     // if(this.username == 'MyUserName' && this.password == 'dummy' ) 
     this.basicAuthenticationService.executeJwtAuthenticationService(this.username,this.password).subscribe({
        next: (data) => {
          console.log(data);
          //redirect to  welcome page
          this.router.navigate(['welcome', this.username]);
          this.invalidLogin = false;
        },
        error: (error)  => {
          console.log(error);
          this.invalidLogin = true;
        },
        complete: () => console.log('complete')
      }
     ) 
   }
}
