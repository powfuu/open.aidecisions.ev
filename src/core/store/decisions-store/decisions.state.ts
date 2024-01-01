// decisions.state.ts

export interface DecisionsState {
    decisions: string[];
    startedDecisionProcess: boolean;
    endDecisionProcess: boolean;
    openAiDecisionChoosen: string;
}

export interface DecisionsStoreModel {
    decisionsStore: DecisionsState,
}

export const initialState: DecisionsState = {
    decisions: [],
    startedDecisionProcess: false,
    endDecisionProcess: false,
    openAiDecisionChoosen: ''
};
