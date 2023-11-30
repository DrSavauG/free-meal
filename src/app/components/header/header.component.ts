import { Component } from "@angular/core";
import { TitleCasePipe } from "@angular/common";
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { HttpService } from "../../services/products.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [
    TitleCasePipe,
    FormsModule,
    ReactiveFormsModule
  ],
})


export class HeaderComponent {
  constructor(
    private httpService: HttpService
  ) {}

  header: string = 'free meal';
  searchControl = new FormControl<string>('', [Validators.required, Validators.minLength(1)]);
    onSearch() {
      const searchUserInput = this.searchControl.value;
      if(searchUserInput) {
          this.httpService.getSearchData(searchUserInput).subscribe((items) => {
              console.log(items);
          });
      }
    }
}

