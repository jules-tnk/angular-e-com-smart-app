import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCommand } from 'src/app/Models/ProductCommand';
import { Product } from 'src/app/Models/Product';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
  products?: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getProducts().subscribe(
      data => this.products=data.products
    );
    console.log(this.products);
  }

  getProductFromKeywordSearch(keyword: string){
    this.productService.getProductsByKeywordSearch(keyword).subscribe(
      productApiDto => this.products = productApiDto.products
    )

  }

}
