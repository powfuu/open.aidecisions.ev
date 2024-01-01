import { OpenAiService } from './../../../../core/services/openai/openai.service';
import { setEndDecisionProcessStatus, setOpenAiDecisionChoosen } from './../../../../core/store/decisions-store/decisions.actions';
import { Store } from '@ngrx/store';
import { Observable, map, take, mergeMap } from 'rxjs';
import { DecisionsService } from '../../../../core/services/decisions/decisions.service';
import { ToastService } from './../../../../core/services/toast/toast.service';
import { Component, OnInit, ViewChild, Input, SimpleChanges } from '@angular/core';
import { DecisionsState } from '../../../../core/store/decisions-store/decisions.state';
import { DecisionsStoreModel } from '../../../../core/store/decisions-store/decisions.state';
import { IonModal } from '@ionic/angular';
import { LoadingService } from '../../../../core/services/loading/loading.service';

@Component({
  selector: 'decision-chooser',
  templateUrl: './decision-chooser.component.html',
  styleUrls: ['./decision-chooser.component.scss'],
})
export class DecisionChooserComponent implements OnInit {
  decisions$!: Observable<DecisionsState>;
  currentDecision: string = "";
  @Input() handleOpenModal: boolean = false;
  @ViewChild('modalOptions') modal!: IonModal;

  constructor(private decisionsStore: Store<DecisionsStoreModel>, private toastService: ToastService, private decisionsService: DecisionsService, private openAiService: OpenAiService, private loading: LoadingService) {
    this.decisions$ = this.decisionsStore.select(decisions => decisions.decisionsStore)
  }

  ngOnInit() {
    this.subscribeToDecisionsStore();
  }

  async ngOnChanges(changes: SimpleChanges) {
    if (this.modal && changes['handleOpenModal']) {
      await this.modal.present();
    }
  }

  async openModal() {
    await this.modal.present();
  }

  startOpenAiProcess(decisions: string[]) {
    const prompt = decisions.map((decision, index) => `${index + 1}. ${decision}`).join(', ');
    this.loading.startLoader().pipe(mergeMap(() => this.openAiService.getApiResponse(prompt))).subscribe(
      (data) => {
        const choice = data.choices[0].message.content;
        if (choice === "no_correct_decisions") {
          this.toastService.error("No correct decisions were found, please provide a correct information.");
        } else {
          const choosenDecision = decisions.find(decision => decision === choice);
          this.decisionsService.setOpenAiDecision(choosenDecision || '');
          this.decisionsService.handleEndDecisionProcessStatus(true);
        }
        this.loading.dismissLoader();
      },
      (error) => {
        this.toastService.error('Error inesperado al realizar la solicitud.');
        this.loading.dismissLoader();
      }
    );
  }

  pushDecision() {
    if (this.verifyDecisions()) {
      this.decisionsService.addDecision(this.currentDecision);
    } else {
      this.toastService.error("Option field cannot be empty.");
    }
    this.clearCurrentDecision();
  }

  verifyDecisions(): boolean {
    return this.currentDecision.trim().length > 0;
  }

  clearCurrentDecision() {
    this.currentDecision = '';
  }

  async verifyDecisionsLength(): Promise<boolean> {
    const decisionsLength = await this.subscribeToDecisionsStore();
    return decisionsLength > 0;
  }

  subscribeToDecisionsStore(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      this.decisions$.subscribe(data => {
        resolve(data.decisions.length);
      });
    });
  }

  getDecision() {
    this.decisionsService.handleEndDecisionProcessStatus(true);
  }

  async editDecisions() {
    const verifyDecisionsLength = await this.verifyDecisionsLength();
    if (verifyDecisionsLength) {
      this.getDecisionProcess();
    } else {
      this.toastService.error("There's no decision added yet.");
    }
  }

  removeDecision(index: number) {
    this.decisionsService.removeDecision(index);
  }

  getDecisionProcess() {
    this.toastService.success("Randomly decision process has been started.");
    this.decisionsService.handleStartedDecisionProcessStatus(true);
    this.closeModal();
  }

  async closeModal() {
    await this.modal.dismiss();
  }
}
