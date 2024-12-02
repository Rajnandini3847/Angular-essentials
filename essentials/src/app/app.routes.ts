import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { AppChildComponent } from './app-child/app-child.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: 'product', component: ProductComponent},
    {path: 'child', component: AppChildComponent},
    {path: 'home', component: AppComponent},
];
