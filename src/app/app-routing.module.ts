import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Coponents/cart/cart.component';
import { DetailProductComponent } from './Coponents/detail-product/detail-product.component';
import { ListProductComponent } from './Coponents/list-product/list-product.component';
import { LoginComponent } from './Coponents/login/login.component';
import { RegisterComponent } from './Coponents/register/register.component';
import {HomePageComponent} from "./Coponents/home-page/home-page.component";
import {ConfirmCommandComponent} from "./Coponents/confirm-command/confirm-command.component";
import {ListCommandComponent} from "./Coponents/list-command/list-command.component";
import {CommandDetailComponent} from "./Coponents/command-detail/command-detail.component";

const routes: Routes = [
  { path: 'liste', component:ListProductComponent},
  { path: 'liste/:id',component: DetailProductComponent,},
  { path: 'panier', component:CartComponent},
  { path: 'login', component:LoginComponent},
  { path: 'confirm', component:ConfirmCommandComponent},
  { path: 'commands', component:ListCommandComponent},
  { path: 'commands/:id', component:CommandDetailComponent},
  { path: 'register', component:RegisterComponent},
  {path: 'product-detail/:id', component: DetailProductComponent,},
  {path: 'home', component: HomePageComponent},
  { path:'', redirectTo: '/home', pathMatch: 'full' }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
