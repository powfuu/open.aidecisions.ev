import { ToastService } from './../../../../core/services/toast/toast.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { DecisionsStoreModel, DecisionsState } from './../../../../core/store/decisions-store/decisions.state';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  decisions$!: Observable<DecisionsState>;

  constructor(private toastService: ToastService, private router: Router, private decisionsStore: Store<DecisionsStoreModel>) {
    this.decisions$ = this.decisionsStore.select(decisions => decisions.decisionsStore)
  }

  presentDisabledError() {
    this.toastService.error("Cannot change tab while app is in current process.");
  }

}
