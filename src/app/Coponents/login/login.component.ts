import { Component } from '@angular/core';
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userEmail: string = "juju@gmail.com";
  userPassword: string = "sacarina";

  constructor(private authService: AuthenticationService,
              private location: Location) {
  }

  ngOnInit() {
  }

  login() {
    window.alert(`Username: ${this.userEmail}\nPassword: ${this.userPassword}`)
    this.authService.login(this.userEmail, this.userPassword);
    this.location.back();
  }

}
