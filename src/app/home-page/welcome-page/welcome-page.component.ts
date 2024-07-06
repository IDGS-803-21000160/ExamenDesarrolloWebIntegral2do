import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/productos';
import { RopaService } from '../../services/ropa.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css',
})
export class WelcomePageComponent implements OnInit {
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  selectedCategories: Set<string> = new Set();

  constructor(private ropaService: RopaService) {}

  ngOnInit(): void {
    this.ropaService.getList().subscribe(
      (data: IProduct[]) => {
        this.products = data;
        console.log('Products:', this.products);
        this.filteredProducts = [...this.products];
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}
