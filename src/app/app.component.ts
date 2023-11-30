import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from "./components/header/header.component";
import { BodyComponent } from "./components/body/body.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpService } from "./services/products.service";
import { Product } from "./models/mock-products";
import { Observable } from "rxjs";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, BodyComponent, HttpClientModule, FooterComponent],
  providers: [HttpService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title: string = 'free meal';
  products$: Observable<Product[]> = this.httpService.products$;

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.getRandomData().subscribe();
  }
}
