import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { fadeInAnimation } from '../../animations';
import { ProductService, PubSubService } from '../../services';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
    animations: [fadeInAnimation],
    // tslint:disable-next-line:use-host-property-decorator
    host: { '[@fadeInAnimation]': '' }
})
export class ProductListComponent implements OnInit, OnDestroy {

    products: any[];
    subscription: Subscription;

    constructor(
        private productService: ProductService,
        private pubSubService: PubSubService
    ) { }

    deleteProduct(id: number) {
        this.productService.delete(id);
        this.loadProducts();
    }

    ngOnInit() {
        this.loadProducts();
        // reload products when updated
        this.subscription = this.pubSubService
            .on('products-updated')
            .subscribe(() => this.loadProducts());
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

    private loadProducts() {
        this.products = this.productService.getAll();
    }

}
