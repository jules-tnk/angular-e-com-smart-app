import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductComponent } from './Coponents/list-product/list-product.component';
import { ProductComponent } from './Coponents/product/product.component';
import { CartComponent } from './Coponents/cart/cart.component';
import { NavBarComponent } from './Coponents/nav-bar/nav-bar.component';
import { PanierItemComponent } from './Coponents/panier-item/panier-item.component';
import { DetailProductComponent } from './Coponents/detail-product/detail-product.component';
import { ProductService } from './services/product/product.service';
import { CartService } from './services/cart/cart.service';
import { LoginComponent } from './Coponents/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './Coponents/register/register.component';
import { HomePageComponent } from './Coponents/home-page/home-page.component';
import { FooterComponent } from './Coponents/footer/footer.component';
import { ListCommandComponent } from './Coponents/list-command/list-command.component';
import { ConfirmCommandComponent } from './Coponents/confirm-command/confirm-command.component';
import { CommandDetailComponent } from './Coponents/command-detail/command-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    ProductComponent,
    CartComponent,
    NavBarComponent,
    PanierItemComponent,
    DetailProductComponent,
    LoginComponent,
    RegisterComponent,
    HomePageComponent,
    FooterComponent,
    ListCommandComponent,
    ConfirmCommandComponent,
    CommandDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
