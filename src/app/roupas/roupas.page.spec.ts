import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoupasPage } from './roupas.page';

describe('RoupasPage', () => {
  let component: RoupasPage;
  let fixture: ComponentFixture<RoupasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RoupasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
