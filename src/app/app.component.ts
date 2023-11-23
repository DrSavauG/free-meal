import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from "./components/header/header.component";
import { BodyComponent } from "./components/body/body.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpService } from "./services/products.service.service";
import { Product } from "./models/mock-products";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, BodyComponent, HttpClientModule],
  providers: [HttpService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title: string = 'free meal';
  products: Product[] = [];
  url: string = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=53024';

  // www.themealdb.com/api/json/v1/1/random.php


  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {

    this.httpService.getData(this.url).subscribe((data) => {
      console.log(data);
      this.products = data;
      //todo отисаться от observable
      //todo использовать т
    });
  }
}
