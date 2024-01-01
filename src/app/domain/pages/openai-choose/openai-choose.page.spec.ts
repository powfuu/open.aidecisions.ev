import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpenaiChoosePage } from './openai-choose.page';

describe('OpenaiChoosePage', () => {
  let component: OpenaiChoosePage;
  let fixture: ComponentFixture<OpenaiChoosePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OpenaiChoosePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
