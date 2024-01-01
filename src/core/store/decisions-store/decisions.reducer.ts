import { createReducer, on } from '@ngrx/store';
import { initialState } from './decisions.state';
import * as DecisionsActions from './decisions.actions';

export const decisionsReducer = createReducer(
    initialState,
    on(DecisionsActions.addDecision, (state, { decision }) => ({
        ...state,
        decisions: [...state.decisions, decision],
    })),
    on(DecisionsActions.removeDecision, (state, { index }) => ({
        ...state,
        decisions: state.decisions.filter((_, i) => i !== index),
    })),
    on(DecisionsActions.removeAllDecisions, (state) => ({
        ...state,
        decisions: [],
    })),
    on(DecisionsActions.setStartedDecisionProcessStatus, (state, { status }) => ({
        ...state,
        startedDecisionProcess: status,
    })),
    on(DecisionsActions.setEndDecisionProcessStatus, (state, { status }) => ({
        ...state,
        endDecisionProcess: status,
    })),
    on(DecisionsActions.setOpenAiDecisionChoosen, (state, { decision }) => ({
        ...state,
        openAiDecisionChoosen: decision,
    }))
);
