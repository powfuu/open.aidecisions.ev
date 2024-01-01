import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DecisionChooserOpenaiComponent } from './decision-chooser-openai.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [DecisionChooserOpenaiComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [DecisionChooserOpenaiComponent]
})

export class DecisionChooserOpenaiModule { }
