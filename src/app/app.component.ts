import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from "./components/header/header.component";
import { BodyComponent } from "./components/body/body.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpService } from "./services/products.service";
import { Product } from "./models/mock-products";
import { map, Observable, concat, of } from "rxjs";

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
  products$: Observable<Product[]>;

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.products$ = this.httpService.getRandomData();
  }
  onSearchResult(result: Product[]): void {
  // onSearchResult(result: Observable<Product[]>): void {
    // Обработка результатов поиска
    // @ts-ignore
    console.log(111,result);
    // this.products$ = this.products$.pipe(concat(result))
    console.log('onSearchResul11111t',this.products$);
    this.products$ = of(result);
  }
}
