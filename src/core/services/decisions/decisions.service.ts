import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DecisionsState } from './../../store/decisions-store/decisions.state';
import * as DecisionsActions from './../../store/decisions-store/decisions.actions';

@Injectable({
  providedIn: 'root'
})
export class DecisionsService {
  constructor(private decisionsStore: Store) {
  }

  addDecision(decision: string) {
    this.decisionsStore.dispatch(DecisionsActions.addDecision({ decision }));
  }

  removeDecision(index: number) {
    this.decisionsStore.dispatch(DecisionsActions.removeDecision({ index }));
  }

  removeAllDecisions() {
    this.decisionsStore.dispatch(DecisionsActions.removeAllDecisions());
  }

  handleStartedDecisionProcessStatus(status: boolean) {
    this.decisionsStore.dispatch(DecisionsActions.setStartedDecisionProcessStatus({ status }));
  }

  handleEndDecisionProcessStatus(status: boolean) {
    this.decisionsStore.dispatch(DecisionsActions.setEndDecisionProcessStatus({ status }));
  }

  setOpenAiDecision(decision: string) {
    this.decisionsStore.dispatch(DecisionsActions.setOpenAiDecisionChoosen({ decision }));
  }
}
