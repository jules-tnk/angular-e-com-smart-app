import { Product } from "./Product";

export class PanierItem {

    product?: Product;
    qte!:number;
   
    
    constructor(product?: Product,qte:number=1){
            this.product=product;
            this.qte=qte;
            
    }  


}