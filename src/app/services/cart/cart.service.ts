import { Injectable } from '@angular/core';
import { ProductCommand} from '../../Models/ProductCommand';
import { Product } from '../../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  panier:ProductCommand[]=[];

  constructor() { }

  add(product:Product, quantity:String){
    if (this.isProductInCart(product)){
      return
    }
    let item: ProductCommand= {product: product,quantity: Number(quantity)};
    this.panier.push(item);
    this.saveCartInLocalStorage();
  }

  isProductInCart(product: Product): boolean{
    for (let panierItem of this.panier) {
      if (panierItem.product.id == product.id){
        return true;
      }
    }
    return false;
  }

  remove(item:Product){
    this.panier=this.panier?.filter((panierItem)=> panierItem.product?.id!=item.id);
    this.saveCartInLocalStorage();
    //this.getCartFromLocalStorage();
  }

  getCartItems(): ProductCommand[] {
        this.getCartFromLocalStorage();
        return this.panier;
  }

  getTotalPrice(): number{
    let totalPrice: number = 0;
    for (const command of this.panier) {
      totalPrice += command.product.price * command.quantity;
    }
    return totalPrice;
  }

  clearCart(){
    this.panier = [];
    this.saveCartInLocalStorage();
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
