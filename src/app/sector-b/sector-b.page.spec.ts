import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectorBPage } from './sector-b.page';

describe('SectorBPage', () => {
  let component: SectorBPage;
  let fixture: ComponentFixture<SectorBPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
