import { setEndDecisionProcessStatus, setStartedDecisionProcessStatus, setOpenAiDecisionChoosen } from './../../../../core/store/decisions-store/decisions.actions';
import { DecisionsService } from './../../../../core/services/decisions/decisions.service';
import { Store } from '@ngrx/store';
import { DecisionsState, DecisionsStoreModel } from './../../../../core/store/decisions-store/decisions.state';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'decisions-result',
  templateUrl: './decisions-result.component.html',
  styleUrls: ['./decisions-result.component.scss'],
})
export class DecisionsResultComponent implements OnInit {
  @Input() fromOpenAi!: boolean;
  decisions$!: Observable<DecisionsState>;
  loaded: boolean = false;
  decisionChoosen: string = "";
  constructor(private decisionsStore: Store<DecisionsStoreModel>, private decisionsService: DecisionsService) { }

  ngOnInit() {
    this.decisions$ = this.decisionsStore.select(state => state.decisionsStore);
    this.addDelaySpinner();
    if (!this.fromOpenAi) {
      this.chooseRandomDecision();
    }
  }

  chooseRandomDecision() {
    this.decisions$.subscribe(decisions => {
      const randomIndex = Math.floor(Math.random() * decisions.decisions.length);
      this.decisionChoosen = decisions.decisions[randomIndex];
    });
  }

  addDelaySpinner() {
    if (this.fromOpenAi) {
      setTimeout(() => {
        this.loaded = true;
      }, 2000);
    } else {
      setTimeout(() => {
        this.loaded = true;
      }, 4000);
    }
  }

  editDecisions() {
    this.decisionsService.handleStartedDecisionProcessStatus(true);
    this.decisionsService.handleEndDecisionProcessStatus(false);
  }

  restartEntireProcess() {
    this.decisionsService.handleStartedDecisionProcessStatus(false);
    this.decisionsService.handleEndDecisionProcessStatus(false);
    this.decisionsService.removeAllDecisions();
    this.decisionsService.setOpenAiDecision('');
  }

  tryAgain() {
    this.loaded = false;
    this.addDelaySpinner();
    this.chooseRandomDecision();
  }

}
