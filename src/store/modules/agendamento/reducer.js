import types from "./types";

import produce from 'immer';

const INITIAL_STATE = {
  agendamentos: [],
  send: null,
};

function agendamento(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.FILTER_AGENDAMENTOS: {
      return produce(state, (draft) => {
        draft.send = { ...action };
      });
    }

    case types.UPDATE_AGENDAMENTOS: {
      return produce(state, (draft) => {
        draft.agendamentos = action.agendamentos;
      });
    }
    
    default:
      return state;
  }
}

export default agendamento;
