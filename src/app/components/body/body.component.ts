import { Component, Input } from "@angular/core";

import { Products } from "../../models/products";
import { products as data } from "../../data/products";


@Component({
    selector: 'body-component',
    templateUrl: './body.component.html',
    styleUrl: './body.component.css',
    standalone: true,

})
export class BodyComponent {
    bodyComponent: string = 'body-component';
    // products: Products = data;
    @Input() product: Products | undefined;
    products: Products = data;

}
