import { Injectable } from '@angular/core';
import { User } from '../../Models/User';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {



 // baseUrl?="http://localhost:8081/user";

 constructor() { }


 registerUser(user: User): void {
    console.log(user);
    //return this.httpClient?.post(`${this.baseUrl}`?,user);
 }
}
