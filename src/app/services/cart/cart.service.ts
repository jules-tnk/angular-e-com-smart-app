import { Injectable } from '@angular/core';
import { PanierItem} from '../../Models/PanierItem';
import { Product } from '../../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  panier:PanierItem[]=[];


  add(product:Product, quantity:String){
    let item: PanierItem= new PanierItem(product,Number(quantity));
    this.panier.push(item);
    console.log(this.panier[0].product);
    window.alert('produit ajouté');
  }

  remove(item:Product){
    this.panier=this.panier?.filter((panierItem)=> panierItem.product?.id!=item.id)
  }

  getCart(): PanierItem[] {
        console.log("je suis dans get panier");
        return this.panier;
  }

  getArticle(id:number) {
        for(var i = 0 ; i<this.panier.length ; i++)
            if (id == this.panier[i].product?.id)
          return this.panier[i];
        return -1;
  }

    constructor() { }

  update($event: any){
    this.panier?.push($event);
  }
}
