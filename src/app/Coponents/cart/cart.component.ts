import { Component } from '@angular/core';
import { ProductCommand } from 'src/app/Models/ProductCommand';
import { Product } from 'src/app/Models/Product';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  panier:ProductCommand[]= [];

  constructor(private panierService: CartService,
              private router: Router) {}

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems(){
    this.panier=this.panierService.getCartItems() ;
  }

  removeFromCart(product: Product) {
    this.panierService.remove(product);
    this.getCartItems();
  }

  getTotalPrice(): number{
    return this.panierService.getTotalPrice();
  }

  validateCommand() {
    if (this.panier.length>0){
      this.router.navigate(["/confirm"]);
    }
  }
}
