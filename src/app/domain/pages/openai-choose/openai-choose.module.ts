import { DecisionChooserOpenaiModule } from './../../components/decision-chooser-openai/decision-chooser-openai.module';
import { DecisionsResultModule } from './../../components/decisions-result/decisions-result.module';
import { AiDecisionsHeaderModule } from './../../components/ai-decisions-header/ai-decisions-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenaiChoosePageRoutingModule } from './openai-choose-routing.module';

import { OpenaiChoosePage } from './openai-choose.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenaiChoosePageRoutingModule,
    DecisionChooserOpenaiModule,
    AiDecisionsHeaderModule,
    DecisionsResultModule
  ],
  declarations: [OpenaiChoosePage]
})
export class OpenaiChoosePageModule { }
