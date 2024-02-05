import { Component } from "@angular/core";

import { HttpService } from "../../services/products.service";
import { ProductRandomComponent } from "../product-random/product-random.component";

@Component({
  selector: 'body-component',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
  standalone: true,
  providers: [HttpService],

  imports: [
    ProductRandomComponent
  ]
})

export class BodyComponent {

  constructor() {
  }

}
