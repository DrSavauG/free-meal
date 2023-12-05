import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from "@angular/router";

import { HttpService } from "../../services/products.service";

@Component({
  selector: 'footer-component',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent {
  public abc: string[] = ['a', 'b', 'c'];

  constructor(private httpService: HttpService, private router: Router) {
  }

  public redirectListRecipes(letter: string): void {
    this.router.navigate(['/items', letter]);
  }
}
