import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcessoriosPage } from './acessorios.page';

describe('AcessoriosPage', () => {
  let component: AcessoriosPage;
  let fixture: ComponentFixture<AcessoriosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AcessoriosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
