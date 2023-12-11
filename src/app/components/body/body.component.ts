import { Component } from "@angular/core";
import { AsyncPipe, NgClass, NgForOf, NgIf } from "@angular/common";
import { RouterLink } from "@angular/router";

import { HttpService } from "../../services/products.service";
import { ProductRandomComponent } from "../product-random/product-random.component";

@Component({
  selector: 'body-component',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
  standalone: true,
  providers: [HttpService],

  imports: [
    NgForOf,
    NgIf,
    NgClass,
    RouterLink,
    AsyncPipe,
    ProductRandomComponent
  ]
})

export class BodyComponent {

  constructor() {
  }

}
