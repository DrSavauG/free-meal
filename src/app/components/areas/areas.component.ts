import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from "rxjs";
import { IngredientCard, StrArea, StrCategory } from "../../models/mock-products";

@Component({
  selector: 'app-areas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './areas.component.html',
  styleUrl: './areas.component.scss'
})
export class AreasComponent implements OnInit{
  public productsArray$: Observable< StrArea[] > | null = null;

  ngOnInit(): void {
  }


}
