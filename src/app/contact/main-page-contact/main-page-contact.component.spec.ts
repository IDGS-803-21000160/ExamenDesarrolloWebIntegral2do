import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageContactComponent } from './main-page-contact.component';

describe('MainPageContactComponent', () => {
  let component: MainPageContactComponent;
  let fixture: ComponentFixture<MainPageContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPageContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
