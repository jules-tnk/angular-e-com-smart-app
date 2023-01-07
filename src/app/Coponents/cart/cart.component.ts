import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { PanierItem } from 'src/app/Models/PanierItem';
import { Product } from 'src/app/Models/Product';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  panier?:PanierItem[];

  constructor(private panierService: CartService, private productService:ProductService) {

  }
  ngOnInit(): void {

    this.panier=this.panierService.getCart() ;
    console.log(this.panier[0].product);

  }
  addToCart(product: Product,quantity :String){
    this.panierService.add(product,quantity);
    console.log(this.panierService.getCart())
  }


}
