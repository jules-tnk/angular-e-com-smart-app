import { Component } from '@angular/core';
import {CartService} from "../../services/cart/cart.service";
import {AuthenticationService} from "../../services/authentication/authentication.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private cartService: CartService,
              private authService: AuthenticationService) {
  }
  getCommandCount() {
    return this.cartService.getCartItems().length;
  }

  isUserLoggedIn(): boolean{
    return this.authService.isUserLoggedIn();
  }

  getUserEmail() {
    return this.authService.getUserEmail();
  }

  logout(){
    this.authService.logout();
  }

  clearLocalStorage() {
    // for development only
    localStorage.clear();
  }
}
