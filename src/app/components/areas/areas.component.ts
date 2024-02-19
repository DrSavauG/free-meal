import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from "@angular/router";

import { Observable } from "rxjs";

import { HttpService } from "../../services/products.service";

import { StrArea } from "../../models/mock-products";

@Component({
  selector: 'app-areas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './areas.component.html',
  styleUrl: './areas.component.scss'
})
export class AreasComponent implements OnInit {
  public categories = ['categories', 'areas', 'ingredients'];

  public productsArray$: Observable<StrArea[]> | null = null;

  constructor(private httpService: HttpService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loadStrAreas();
  }


  private loadStrAreas() {
    this.productsArray$ = this.httpService.getListAllAreas();
  }

  public goToCategory(category: string) {
    this.router.navigate([`/${category}`]);
  }

  protected searchByArea(area: string): void {
    this.router.navigate(['/area', area]);
  }
}
