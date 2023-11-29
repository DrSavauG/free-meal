import { Component, Input, Output,EventEmitter } from "@angular/core";
import { TitleCasePipe } from "@angular/common";
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { HttpService } from "../../services/products.service";
import { Observable } from "rxjs";
import { Product } from "../../models/mock-products";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true,
  imports: [
    TitleCasePipe,
    FormsModule,
    ReactiveFormsModule
  ],
})


export class HeaderComponent {
  @Input() products: Observable<Product[]>; // Принимаем products из родительского компонента
//@ts-ignore
//   @Output() updateProductsEvent = new EventEmitter(); // Создаем событие для обновления products$
  @Output() searchResult = new EventEmitter<Product[]>();
  constructor(
    private httpService: HttpService
  ) {}

  header: string = 'free meal';
  searchControl = new FormControl<string>('', [Validators.required, Validators.minLength(1)]);
    onSearch() {
      const searchUserInput = this.searchControl.value;
      if(searchUserInput) {
          this.httpService.getSearchData(searchUserInput).subscribe((items) => {
              console.log('items',items);
            this.searchResult.emit(items);
          });
      }
    }
}

