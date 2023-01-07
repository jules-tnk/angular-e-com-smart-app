import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:FormGroup;
  submitted: any;



  constructor(
      private formBuilder: FormBuilder,

      private loginService: LoginService,

  ) {
    this.loginForm=formBuilder.group({
      username: '',
      password: ''
  });

  }
  ngOnInit() {
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm?.controls;
  }

  onSubmit() {

      this.loginService.login(this?.f?.['username']?.value, this.f?.['password']?.value);
}

}
