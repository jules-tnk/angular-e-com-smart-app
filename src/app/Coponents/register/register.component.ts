import { Component } from '@angular/core';
import { User } from '../../Models/User';
import { RegisterService } from '../../services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user:User =new User();

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  userRegister(){
    console.log(this.user);
    this.registerService.registerUser(this.user)
    //.subscribe(data=>{alert("Successfully User is register?")},error=>alert("Sorry User not register"));
  }

}
