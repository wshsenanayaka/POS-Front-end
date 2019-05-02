import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';


// component
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './subcomponents/category/category.component';
import { SuppliersComponent } from './subcomponents/suppliers/suppliers.component';
import { CustomerComponent } from './subcomponents/customer/customer.component';
import { CustomersComponent } from './subcomponents/customers/customers.component';
import { ProductsComponent } from './subcomponents/products/products.component';
import { ProductComponent } from './subcomponents/product/product.component';
import { PosComponent } from './pos/pos/pos.component';
import { CheckoutComponent } from './pos/checkout/checkout.component';
import { InvoiceComponent } from './pos/invoice/invoice.component';
import { HomeComponent } from './subcomponents/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    DashboardComponent,
    CategoryComponent,
    SuppliersComponent,
    CustomerComponent,
    CustomersComponent,
    ProductsComponent,
    ProductComponent,
    PosComponent,
    CheckoutComponent,
    InvoiceComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([{path:'',redirectTo:'login' ,pathMatch:'full'},
    {path:'login', component:LoginComponent},
    {path:'dashboard', component:DashboardComponent, children:[
      {path:'',redirectTo:'home' ,pathMatch:'full'},
      {path:'home', component:HomeComponent},
      {path:'customers', component:CustomersComponent},
      {path:'customer/${id}', component:CustomerComponent},
      {path:'suppliers', component:SuppliersComponent},
      {path:'category', component:CategoryComponent},
      {path:'products', component:ProductsComponent},
      {path:'product/${id}', component:ProductComponent},
    ]},
    
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
