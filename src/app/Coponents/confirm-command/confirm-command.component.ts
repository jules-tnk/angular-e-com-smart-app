import {Component, OnInit} from '@angular/core';
import {ProductCommand} from "../../Models/ProductCommand";
import {CartService} from "../../services/cart/cart.service";
import {Router} from "@angular/router";
import {CommandService} from "../../services/command/command.service";
import {AuthenticationService} from "../../services/authentication/authentication.service";

@Component({
  selector: 'app-confirm-command',
  templateUrl: './confirm-command.component.html',
  styleUrls: ['./confirm-command.component.css']
})
export class ConfirmCommandComponent implements OnInit{
  panier:ProductCommand[] = [];

  constructor(private panierService: CartService,
              private router: Router,
              private commandService: CommandService,
              private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems(){
    this.panier=this.panierService.getCartItems() ;
  }
  getTotalPrice(): number{
    return this.panierService.getTotalPrice();
  }


  validateCommand() {
    if (!this.authService.isUserLoggedIn()){
      window.alert("Vous n'êtes pas authentifié");
      this.router.navigate(["/login"]);
      return;
    }
    this.commandService.validateCommand();
    this.router.navigate(["/commands"]);
  }
}
