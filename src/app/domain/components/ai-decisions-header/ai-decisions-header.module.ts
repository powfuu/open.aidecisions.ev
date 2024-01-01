import { IonicModule } from '@ionic/angular';
import { AiDecisionsHeaderComponent } from './ai-decisions-header.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AiDecisionsHeaderComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [AiDecisionsHeaderComponent]
})
export class AiDecisionsHeaderModule { }
