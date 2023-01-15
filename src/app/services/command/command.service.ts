import { Injectable } from '@angular/core';
import {ProductCommand} from "../../Models/ProductCommand";
import {ValidatedCommand} from "../../Models/validatedCommand";
import {CartService} from "../cart/cart.service";

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  COMMAND_KEY: string = "COMMAND_KEY";

  commands: ValidatedCommand[] = [];

  constructor(private cartService: CartService) { }

  validateCommand(){
    this.loadCommandsFromLocalStorage();
    let newCommandId: number = this.commands.length+1;
    let newValidatedCommand: ValidatedCommand = {
      id: newCommandId,
      productCommands: this.cartService.getCartItems(),
      date: new Date(),
      totalPrice: this.cartService.getTotalPrice()
    };
    this.commands.push(newValidatedCommand);
    this.cartService.clearCart();
    this.saveCommandsInLocalStorage();
  }

  getValidatedCommands(): ValidatedCommand[] {
    this.loadCommandsFromLocalStorage();
    return this.commands;
  }

  getValidatedCommandById(id: number): ValidatedCommand | undefined {
    this.loadCommandsFromLocalStorage();
    return this.commands.find(command => command.id == id);
  }

  saveCommandsInLocalStorage(){
    localStorage.setItem(this.COMMAND_KEY, JSON.stringify(this.commands));
  }

  loadCommandsFromLocalStorage(){
    let savedCommands = localStorage.getItem(this.COMMAND_KEY);
    if (savedCommands){
      this.commands = JSON.parse(savedCommands);
    }
  }

}
