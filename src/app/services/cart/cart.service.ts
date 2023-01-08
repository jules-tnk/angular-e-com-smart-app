import { Injectable } from '@angular/core';
import { PanierItem} from '../../Models/PanierItem';
import { Product } from '../../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  panier:PanierItem[]=[];

  constructor() { }

  add(product:Product, quantity:String){
    let item: PanierItem= {product: product,quantity: Number(quantity)};
    this.panier.push(item);
    console.log(this.panier[0].product);
    this.saveCartInLocalStorage();
  }

  remove(item:Product){
    this.panier=this.panier?.filter((panierItem)=> panierItem.product?.id!=item.id);
    this.saveCartInLocalStorage();
    //this.getCartFromLocalStorage();
  }

  getCartItems(): PanierItem[] {
        console.log("Retrieving cart items...");
        this.getCartFromLocalStorage();
        return this.panier;
  }

  update($event: any){
    this.panier?.push($event);
  }

  saveCartInLocalStorage(){
    localStorage.setItem('CART_KEY', JSON.stringify(this.panier));
  }

  getCartFromLocalStorage(){
    let savedCartJson = localStorage.getItem('CART_KEY');
    if (savedCartJson){
      this.panier = JSON.parse(savedCartJson);
    }
  }

}
