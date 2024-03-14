import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

import { PageType } from "../../constants/enums";

@Component({
  selector: 'app-letter',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './letter.component.html',
  styleUrl: './letter.component.scss',
  inputs: ['letter']
})
export class LetterComponent {
  letter: string | null = null;
  protected readonly PageType = PageType;
}
