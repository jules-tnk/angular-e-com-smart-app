import { Injectable } from '@angular/core';
import {catchError, Observable, of} from 'rxjs';
import { Product } from '../../Models/Product';
import { CartService } from '../cart/cart.service';
import {HttpClient} from '@angular/common/http'
import {ProductApiDto} from "../../Models/productApiDto";

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  baseApiUrl: string = "https://dummyjson.com";

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductApiDto> {
    let fullUrl: string = this.baseApiUrl + "/products";
    return this.http.get<ProductApiDto>(fullUrl).pipe(
      catchError(this.handleError<ProductApiDto>("getProducts"))
    );
  }

  getProductsByKeywordSearch(keyword: string): Observable<ProductApiDto> {
    let fullUrl: string = this.baseApiUrl + `/products/search?q=${keyword}`;
    return this.http.get<ProductApiDto>(fullUrl).pipe(
      catchError(this.handleError<ProductApiDto>("getProducts"))
    );
  }

  getProductById(id: number): Observable<Product> {
    let fullUrl: string = this.baseApiUrl + `/products/${id}`;
    return this.http.get<Product>(fullUrl).pipe(
      catchError(this.handleError<Product>("getProductById"))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
