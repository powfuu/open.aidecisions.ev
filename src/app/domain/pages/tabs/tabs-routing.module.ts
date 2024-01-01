import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'randomly-choose',
        loadChildren: () => import('../randomly-choose/randomly-choose.module').then(m => m.RandomlyChoosePageModule)
      },
      {
        path: 'openai-choose',
        loadChildren: () => import('../openai-choose/openai-choose.module').then(m => m.OpenaiChoosePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/openai-choose',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/openai-choose',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
