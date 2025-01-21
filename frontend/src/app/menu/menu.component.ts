import { Component, OnInit } from '@angular/core';
import { HardcodedAuthentificationService } from '../service/hardcoded-authentification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{

  isLogged = false;

  constructor(public hardcodedAuthentification: HardcodedAuthentificationService){  }

  ngOnInit(): void {
    // this.isLogged = this.hardcodedAuthentification.isUserLoggedIn();
  }
}
