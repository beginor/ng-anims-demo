import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import {
    ProductListComponent
} from './components/product-list/product-list.component';
import {
    ProductEditComponent
} from './components/product-edit/product-edit.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'products',
        component: ProductListComponent,
        children: [
            { path: 'add', component: ProductEditComponent },
            { path: 'edit/:id', component: ProductEditComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true,
            enableTracing: false
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
