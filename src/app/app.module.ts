import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {
    ProductListComponent
} from './components/product-list/product-list.component';
import {
    ProductEditComponent
} from './components/product-edit/product-edit.component';
import { ProductService, PubSubService } from './services';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ProductListComponent,
        ProductEditComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientJsonpModule,
        NgbModule.forRoot(),
        AppRoutingModule
    ],
    bootstrap: [AppComponent],
    providers: [
        ProductService,
        PubSubService
    ]
})
export class AppModule { }
