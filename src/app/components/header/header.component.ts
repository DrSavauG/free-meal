import { Component } from "@angular/core";
import { TitleCasePipe } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterLink, Router } from "@angular/router";

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
  constructor(private router: Router) {
  }

  public header: string = 'free meal';

  protected toMainPage() {
    this.router.navigate(['/']);
  }

  protected searchByLetter(event: Event): void {
    const {value} = event.target as HTMLInputElement;
    this.router.navigate(['/items', value]);
  }

  protected goToFavorites() {
    this.router.navigate(['/favorites']);
  }
  protected goToCategories() {
    this.router.navigate(['/categories']);
  }
}

