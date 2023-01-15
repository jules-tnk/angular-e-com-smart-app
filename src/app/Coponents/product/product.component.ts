import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { CartService } from 'src/app/services/cart/cart.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  showFormFlag:Boolean=false;

  @Input()
  product!:Product;

  @Output()
  productSelected=new EventEmitter<Product>();

  constructor(private panierService:CartService,
              private router: Router){}


  addToCart(quantity:String) {
      this.panierService.add(this.product,quantity);
      this.router.navigate(['/panier']);
  }

  showForm(){
    this.showFormFlag=!this.showFormFlag;
  }

}
