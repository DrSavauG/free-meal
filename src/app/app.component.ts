import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import { Observable } from "rxjs";

import { HttpService } from "./services/products.service";
import { Product } from "./models/mock-products";

import { HeaderComponent } from "./components/header/header.component";
import { BodyComponent } from "./components/body/body.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, BodyComponent, HttpClientModule, FooterComponent],
  providers: [HttpService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  public title: string = 'free meal';
  public products$: Observable<Product[]> = this.httpService.products$;

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.getRandomData().subscribe();
  }
}
