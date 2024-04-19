import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectorAUserPage } from './sector-a-user.page';

describe('SectorAUserPage', () => {
  let component: SectorAUserPage;
  let fixture: ComponentFixture<SectorAUserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorAUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
