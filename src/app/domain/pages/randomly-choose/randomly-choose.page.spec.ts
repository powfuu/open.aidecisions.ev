import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RandomlyChoosePage } from './randomly-choose.page';

describe('RandomlyChoosePage', () => {
  let component: RandomlyChoosePage;
  let fixture: ComponentFixture<RandomlyChoosePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RandomlyChoosePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
