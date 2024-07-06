import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationFormComponent } from './information-form/information-form.component';
import { FooterContactComponent } from './footer-contact/footer-contact.component';
import { MainPageContactComponent } from './main-page-contact/main-page-contact.component';

@NgModule({
  declarations: [
    MainPageContactComponent,
    InformationFormComponent,
    FooterContactComponent,
  ],
  imports: [CommonModule],
  exports: [MainPageContactComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContactModule {}
