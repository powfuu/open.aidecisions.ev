import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RandomlyChoosePage } from './randomly-choose.page';

const routes: Routes = [
  {
    path: '',
    component: RandomlyChoosePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomlyChoosePageRoutingModule {}
