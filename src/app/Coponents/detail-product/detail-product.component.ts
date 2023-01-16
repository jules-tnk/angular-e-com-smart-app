import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit{
  product!: Product;
  showFormFlag:Boolean=false;

  constructor(private productService:ProductService,
              private route: ActivatedRoute,
              private router: Router,
              private cartService: CartService){}

    ngOnInit(): void {
    this.getProduct();
    }


    getProduct(){
      const id:number= this.route.snapshot.params['id'];
      this.productService.getProductById(Number(id)).subscribe(
        product => this.product = product
      );
    }

    showForm(){
      this.showFormFlag=true;
    }
  addToCart(quantity: string) {
    this.cartService.add(this.product,quantity);
    this.router.navigate(['/panier']);
  }

}
