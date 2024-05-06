import { Component } from "@angular/core";

import { HttpService } from "../../services/products.service";
import { MainComponent } from "../../layouts/main/main.component";

@Component({
  selector: 'body-component',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
  standalone: true,
  providers: [HttpService],

  imports: [
    MainComponent
  ]
})

export class BodyComponent {
}
