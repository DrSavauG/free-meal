import { Component, Input } from "@angular/core";
import { NgClass, NgForOf, NgIf } from "@angular/common";

import { HttpService } from "../../services/products.service";

import { Product } from "../../models/mock-products";

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
  @Input() products: Product[] | null;
  public isShowMore: boolean = false;
}
