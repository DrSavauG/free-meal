import {Component} from "@angular/core";
import { TitleCasePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true,
  imports: [
    TitleCasePipe,
    FormsModule
  ],


})
export class HeaderComponent{
  header:string  = 'free meal';
  userInput: string | undefined;
}

