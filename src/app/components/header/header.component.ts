import {Component} from "@angular/core";
import {Products} from "../../models/products";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true,//todo на надо?

})
export class HeaderComponent{
  header:string  = 'header';
}
