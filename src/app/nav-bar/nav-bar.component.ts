import { Component } from '@angular/core';
import { HomePageModule } from '../home-page/home-page.module';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ContactModule } from '../contact/contact.module';
import { ProductGalleryModule } from '../product-gallery/product-gallery.module';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    HomePageModule,
    ContactModule,
    ProductGalleryModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {}
