import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PanierItem} from 'src/app/Models/PanierItem';
import { Product } from 'src/app/Models/Product';
import { CartService } from 'src/app/services/cart/cart.service';

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

  constructor(
    private panierService:CartService){}



  addTocart(quantity:String) {
    //this.productSelected.emit(this.product);
      this.panierService.add(this.product,quantity);
      console.log("ajouté");

  }
  viewDetails(product:Product){
    console.log(product);
  }

  showForm(){
    this.showFormFlag=!this.showFormFlag;
  }




}
