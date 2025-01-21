
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { HelloWorldBean, WelecomeDataService } from '../service/data/welecome-data.service';
import { error } from 'console';

@Component({ //decorator (annotation in java)
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {

message = 'Some Welcome message';
welcomeMessageFromService = '';
name = '';
//ActivateRoute
  constructor(
    private service:WelecomeDataService,
    private route:ActivatedRoute) {

  }

  ngOnInit(): void { //void return nothing
    console.log(this.message);
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage(){
    //console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService(this.name).subscribe({
      
      next: (response) => this.handleSuccessfulResponse(response),
      error: (error) => this.handleErrorResponse(error),
      complete: () => console.log('complete')

    }
    );
  }

 handleSuccessfulResponse(response: any){
  this.welcomeMessageFromService = response.message;
}

handleErrorResponse(error: any){
  this.welcomeMessageFromService = error.error.message;
}

}
