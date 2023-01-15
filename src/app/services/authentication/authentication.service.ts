import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isUserAuthenticated: boolean = false;
  USER_AUTH_KEY = "USER_AUTH_KEY"
  DEFAULT_USER_EMAIL = "juju@gmail.com"
  DEFAULT_PASSWORD = "sacarina"

  constructor() {
    this.loadUserAuthStatusFromLocalStorage();
  }

  isUserLoggedIn(): boolean {
    this.loadUserAuthStatusFromLocalStorage();
    return this.isUserAuthenticated;
  }

  getUserEmail(){
    if (!this.isUserLoggedIn()){
      return "";
    }
    return this.DEFAULT_USER_EMAIL;
  }

  login(email: string, password: string) {
    if (email == this.DEFAULT_USER_EMAIL && password == this.DEFAULT_PASSWORD) {
      this.isUserAuthenticated = true;
      this.saveUserAuthStatusInLocalStorage()
    }
    else {
      window.alert("Incorrect credentials")
    }
  }

  logout() {
    this.isUserAuthenticated = false;
    this.saveUserAuthStatusInLocalStorage()
  }

  saveUserAuthStatusInLocalStorage() {
    localStorage.setItem(this.USER_AUTH_KEY, JSON.stringify(this.isUserAuthenticated))
  }

  loadUserAuthStatusFromLocalStorage() {
    let savedUserAuthStatus = localStorage.getItem(this.USER_AUTH_KEY);
    if (savedUserAuthStatus) {
      this.isUserAuthenticated = JSON.parse(savedUserAuthStatus);
    }
  }
}
