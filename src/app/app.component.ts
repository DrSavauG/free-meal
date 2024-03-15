import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import { HttpService } from "./services/products.service";
import { KeyboardService } from "./services/keyboard-service.service";

import { HeaderComponent } from "./components/header/header.component";
import { BodyComponent } from "./components/body/body.component";
import { FooterComponent } from "./components/footer/footer.component";
import { TITLE } from "./constants/constants";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, BodyComponent, HttpClientModule, FooterComponent],
  providers: [HttpService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  public title: string = TITLE;

  constructor() {
  }
}
