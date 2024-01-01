import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenaiChoosePage } from './openai-choose.page';

const routes: Routes = [
  {
    path: '',
    component: OpenaiChoosePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenaiChoosePageRoutingModule {}
