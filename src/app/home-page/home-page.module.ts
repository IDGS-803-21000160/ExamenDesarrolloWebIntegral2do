import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { RopaService } from '../services/ropa.service';

@NgModule({
  declarations: [WelcomePageComponent],
  imports: [CommonModule],
  exports: [WelcomePageComponent],
  providers: [RopaService],
})
export class HomePageModule {}
