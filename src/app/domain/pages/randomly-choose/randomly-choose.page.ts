import { setEndDecisionProcessStatus, setStartedDecisionProcessStatus, removeAllDecisions } from './../../../../core/store/decisions-store/decisions.actions';
import { DecisionsService } from './../../../../core/services/decisions/decisions.service';
import { IonModal } from '@ionic/angular';
import { DecisionsStoreModel } from './../../../../core/store/decisions-store/decisions.state';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { DecisionsState } from '../../../../core/store/decisions-store/decisions.state';

@Component({
  selector: 'app-randomly-choose',
  templateUrl: './randomly-choose.page.html',
  styleUrls: ['./randomly-choose.page.scss'],
})
export class RandomlyChoosePage implements OnInit {
  decisions$!: Observable<DecisionsState>;
  @Input() handleOpenModal: boolean = false;
  @ViewChild('modal') modal!: IonModal;

  constructor(private decisionsStore: Store<DecisionsStoreModel>, private decisionsService: DecisionsService) { }

  ngOnInit() {
    this.decisions$ = this.decisionsStore.select(state => state.decisionsStore);
  }

  getProbabilityRate(numberOfDecisions: number): number {
    const probabilityRate = 100 / numberOfDecisions;

    return probabilityRate;
  }

  async triggerModal() {
    this.handleOpenModal = !this.handleOpenModal;
  }

  stopProcess() {
    this.decisionsService.handleEndDecisionProcessStatus(false);
    this.decisionsService.handleStartedDecisionProcessStatus(false);
    this.decisionsService.removeAllDecisions();
  }

}
