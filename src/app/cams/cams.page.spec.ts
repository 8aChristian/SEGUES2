import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamsPage } from './cams.page';

describe('CamsPage', () => {
  let component: CamsPage;
  let fixture: ComponentFixture<CamsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CamsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
