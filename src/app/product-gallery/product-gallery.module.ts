import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos/productos.component';
import { FiltersComponent } from './filters/filters.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RopaService } from '../services/ropa.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ProductosComponent, FiltersComponent, MainPageComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [MainPageComponent],
  providers: [RopaService],
})
export class ProductGalleryModule {}
