import { IonicModule } from '@ionic/angular';
import { DecisionsResultComponent } from './decisions-result.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [DecisionsResultComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [DecisionsResultComponent]
})
export class DecisionsResultModule { }
