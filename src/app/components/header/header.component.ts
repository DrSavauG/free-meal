import { Component } from "@angular/core";
import { TitleCasePipe } from "@angular/common";
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterLink, Router } from "@angular/router";

import { HttpService } from "../../services/products.service";


@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [
    TitleCasePipe,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ],
})

export class HeaderComponent {
  constructor(
    private httpService: HttpService,
    private router: Router
  ) {
  }

  public header: string = 'free meal';
  public searchControl: FormControl<string | null> = new FormControl<string>('', [Validators.required, Validators.minLength(1)]);

  protected toMainPageAndReload() {
    this.router.navigate(['/']);
  }

  protected searchByLetter(event: Event): void {
    const {value} = event.target as HTMLInputElement;
    this.router.navigate(['/items', value]);
  }
}

