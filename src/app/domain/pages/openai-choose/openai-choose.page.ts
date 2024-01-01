import { Observable } from 'rxjs';
import { IonModal } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { DecisionsStoreModel, DecisionsState } from './../../../../core/store/decisions-store/decisions.state';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DecisionsService } from '../../../../core/services/decisions/decisions.service';

@Component({
  selector: 'app-openai-choose',
  templateUrl: './openai-choose.page.html',
  styleUrls: ['./openai-choose.page.scss'],
})
export class OpenaiChoosePage implements OnInit {
  decisions$!: Observable<DecisionsState>;
  @Input() handleOpenModal: boolean = false;
  @ViewChild('modal') modal!: IonModal;

  constructor(private decisionsStore: Store<DecisionsStoreModel>, private decisionsService: DecisionsService) { }

  ngOnInit() {
    this.decisions$ = this.decisionsStore.select(state => state.decisionsStore);
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
