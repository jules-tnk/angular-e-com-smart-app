import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private username?:String;
  public password?: String;

    constructor() {
        
    }

    

    login(username:String, password:String) {
      
        console.log("connecté");
        
    }

    logout() {
        console.log("disconnected");
    }
}
