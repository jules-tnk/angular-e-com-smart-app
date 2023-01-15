import { Component } from '@angular/core';
import { User } from '../../Models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = {};

  constructor() { }

  ngOnInit(): void {
  }

  userRegister(){
    window.alert(`User to register: \n${JSON.stringify(this.user)}`);
  }

}
