import { Component, Input } from "@angular/core";

import { Product } from "../../models/mock-products";
import { NgClass, NgForOf, NgIf } from "@angular/common";
import { HttpService } from "../../services/products.service.service";


@Component({
  selector: 'body-component',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
  standalone: true,
  providers: [HttpService],


  imports: [
    NgForOf,
    NgIf,
    NgClass
  ]
})
export class BodyComponent {
  bodyComponent: string = 'body-component';
  @Input() products: Product[] | null;
  isShowMore: boolean = false;
}
