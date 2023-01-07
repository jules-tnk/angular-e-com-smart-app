import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PanierItem } from 'src/app/Models/PanierItem';
import { Product } from 'src/app/Models/Product';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
  allProducts: Product[] = [];
  products: Product[] = this.allProducts;
  searchText = '';
  productsJson = new ProductService(this.http);

  getAllProducts = () => {
    this.productsJson.getProducts().subscribe((data) => {
      this.allProducts = data.products;
      this.products = this.allProducts;
      console.log(this.products);


    });
  };
  ngOnInit() {
    this.getAllProducts();
  }

  constructor(
    /* private cartService: CartService, */ private http: HttpClient
  ) {}






}
