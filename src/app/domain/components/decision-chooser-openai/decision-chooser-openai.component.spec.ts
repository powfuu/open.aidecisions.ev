import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DecisionChooserOpenaiComponent } from './decision-chooser-openai.component';

describe('DecisionChooserOpenaiComponent', () => {
  let component: DecisionChooserOpenaiComponent;
  let fixture: ComponentFixture<DecisionChooserOpenaiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DecisionChooserOpenaiComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DecisionChooserOpenaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
