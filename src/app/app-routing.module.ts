import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Coponents/cart/cart.component';
import { DetailProductComponent } from './Coponents/detail-product/detail-product.component';
import { ListProductComponent } from './Coponents/list-product/list-product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './Coponents/register/register.component';
import {HomePageComponent} from "./Coponents/home-page/home-page.component";

const routes: Routes = [
  { path: 'liste', component:ListProductComponent},
  { path: 'liste/:id',component: DetailProductComponent,},
  { path: 'panier', component:CartComponent},
  { path: 'Login', component:LoginComponent},
  { path: 'Register', component:RegisterComponent},
  {
    path: 'product-detail/:id',
    component: DetailProductComponent,
    data: { product: 'product' },
  },
  {path: 'home', component: HomePageComponent},
  { path:'', redirectTo: '/home', pathMatch: 'full' }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
