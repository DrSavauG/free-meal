import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

import { LetterComponent } from "../letter/letter.component";
import { abcString } from "../../constants/constants";

@Component({
  selector: 'footer-component',
  standalone: true,
  imports: [CommonModule, RouterLink, LetterComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent {
  public abc: string[] = abcString.split('');
}
