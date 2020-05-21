import { LOAD_ALL_NOTES, SHOW_LOADER, ADD_NOTE, REMOVE_NOTE } from "../types";

const handlers = {
  REMOVE_NOTE: (state, { payload }) => ({
    ...state,
    notes: state.notes.filter((item) => item.id !== payload),
  }),
  ADD_NOTE: (state, { payload }) => ({
    ...state,
    notes: [...state.notes, payload],
  }),
  SHOW_LOADER: (state) => ({ ...state, loading: true }),
  LOAD_ALL_NOTES: (state, { payload }) => ({
    ...state,
    notes: [...payload],
    loading: false,
  }),
  DEFAULT: (state) => state,
};

const initialState = {
  notes: [],
  loading: false,
};

export const firebaseReducer = (state = initialState, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
