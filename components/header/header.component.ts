import {Component} from "@angular/core";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true,//todo на надо?

})
export class HeaderComponent{
  header:string  = 'header'
}
