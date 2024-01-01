import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DecisionChooserComponent } from './decision-chooser.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [DecisionChooserComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [DecisionChooserComponent]
})
export class DecisionChooserModule { }
