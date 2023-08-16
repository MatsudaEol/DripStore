import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CanecasPage } from './canecas.page';

describe('CanecasPage', () => {
  let component: CanecasPage;
  let fixture: ComponentFixture<CanecasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CanecasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
