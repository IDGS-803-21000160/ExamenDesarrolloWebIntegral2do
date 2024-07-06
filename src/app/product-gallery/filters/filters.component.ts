import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/productos';
import { RopaService } from '../../services/ropa.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit {
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

  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const query = inputElement.value.toLowerCase();
    this.applyFilters(query);
  }

  onFilterChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.selectedCategories.add(checkbox.value);
    } else {
      this.selectedCategories.delete(checkbox.value);
    }
    this.applyFilters(
      (
        document.getElementById('search-input') as HTMLInputElement
      ).value.toLowerCase()
    );
  }

  applyFilters(query: string): void {
    this.filteredProducts = this.products.filter((product) => {
      const matchesSearch =
        product.nombre.toLowerCase().includes(query) ||
        product.descripcion.toLowerCase().includes(query);
      const matchesCategory =
        this.selectedCategories.size === 0 ||
        Array.from(this.selectedCategories).some(
          (category) =>
            product.nombre.toLowerCase().includes(category) ||
            product.descripcion.toLowerCase().includes(category)
        );
      return matchesSearch && matchesCategory;
    });
    console.log(this.filteredProducts);
  }
}
