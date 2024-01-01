import { DecisionsResultModule } from './../../components/decisions-result/decisions-result.module';
import { AiDecisionsHeaderModule } from './../../components/ai-decisions-header/ai-decisions-header.module';
import { DecisionChooserModule } from './../../components/decision-chooser/decision-chooser.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RandomlyChoosePageRoutingModule } from './randomly-choose-routing.module';

import { RandomlyChoosePage } from './randomly-choose.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RandomlyChoosePageRoutingModule,
    DecisionChooserModule,
    AiDecisionsHeaderModule,
    DecisionsResultModule
  ],
  declarations: [RandomlyChoosePage]
})
export class RandomlyChoosePageModule { }
