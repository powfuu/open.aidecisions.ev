// decisions.module.ts

import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { decisionsReducer } from './decisions.reducer';

@NgModule({
    imports: [
        StoreModule.forRoot({ decisionsStore: decisionsReducer }),
    ],
})
export class DecisionsModule { }
