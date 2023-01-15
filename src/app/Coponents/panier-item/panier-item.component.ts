import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductCommand } from 'src/app/Models/ProductCommand';
import { CartService } from 'src/app/services/cart/cart.service';
import {Product} from "../../Models/Product";

@Component({
  selector: 'app-panier-item',
  templateUrl: './panier-item.component.html',
  styleUrls: ['./panier-item.component.css']
})
export class PanierItemComponent {

  @Input()
  panierItem ?:ProductCommand;

  @Output()
  productSelected=new EventEmitter<ProductCommand>();

  constructor(private panierService:CartService){

  }

  retirer(){
    this.productSelected.emit(this.panierItem);
        if (this.panierItem?.product)
          this.panierService.remove(this.panierItem?.product);
  }


  removeFromCart(product: Product) {

  }
}
