// decisions.actions.ts

import { createAction, props } from '@ngrx/store';

export const addDecision = createAction(
    '[Decisions] Add Decision',
    props<{ decision: string }>()
);

export const removeDecision = createAction(
    '[Decisions] Remove Decision',
    props<{ index: number }>()
);

export const removeAllDecisions = createAction(
    '[Decisions] Remove All Decisions'
);

export const setStartedDecisionProcessStatus = createAction(
    '[Decisions] Set started decision process status',
    props<{ status: boolean }>()
);

export const setEndDecisionProcessStatus = createAction(
    '[Decisions] Set end decision process status',
    props<{ status: boolean }>()
);

export const setOpenAiDecisionChoosen = createAction(
    '[Decisions] Set OpenAi decision',
    props<{ decision: string }>()
);
