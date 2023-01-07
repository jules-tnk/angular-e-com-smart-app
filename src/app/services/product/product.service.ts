import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Product } from '../../Models/Product';
import { CartService } from '../cart/cart.service';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  product0: Product = new Product (1,"Pomme",10,"https://st2.depositphotos.com/7036298/10694/i/600/depositphotos_106948346-stock-photo-ripe-red-apple-with-green.jpg","true");
  product1: Product = new Product(2,"Banana",8,"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/800px-Banana-Single.jpg","false");
  product2: Product = new Product(3,"Tomate",4,"https://img.freepik.com/vecteurs-libre/tomates-fraiches_1053-566.jpg","true");
  product3: Product = new Product(4,"Ananas",15,"https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80","false");

  products!: any ;



  constructor(private http: HttpClient) {}
  getProducts() {
    this.products=this.http.get<any>('https://dummyjson.com/products');
    return this.http.get<any>('https://dummyjson.com/products');
  }


  getAll():void{
    for (var i = 0; i < this.products.length; i++) {
      console.log(this.products[i]);
    }

  }

  getProductById(id: number):any {
    for (var i = 0; i < this.products.length; i++) {
     if(this.products[i].id=== id){
       console.log("details");
       return of(this.products[i]);
     }
     else{

     }
   }
 }

}
