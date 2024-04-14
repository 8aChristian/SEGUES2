import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectorAPage } from './sector-a.page';

describe('SectorAPage', () => {
  let component: SectorAPage;
  let fixture: ComponentFixture<SectorAPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
