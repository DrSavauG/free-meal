import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from "@angular/router";

import { HttpService } from "../../services/products.service";
import { LetterComponent } from "../letter/letter.component";

@Component({
  selector: 'footer-component',
  standalone: true,
  imports: [CommonModule, RouterLink, LetterComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent {
  private abcString: string = 'abcdefghijklmnopqrstuvwxyz';
  public abc: string[] = this.abcString.split('');

  constructor(private httpService: HttpService, private router: Router) {
  }
}
