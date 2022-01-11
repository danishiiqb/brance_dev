const OPEN_MODAL = "OPEN_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";

function modal(state = { modal: false }, action) {
  if (action.type === OPEN_MODAL) {
    return { ...state, modal: true };
  }
  if (action.type === CLOSE_MODAL) {
    return { ...state, modal: false };
  }
  return state;
}

function openModal() {
  return { type: OPEN_MODAL };
}

function closeModal() {
  return { type: CLOSE_MODAL };
}

export { openModal, closeModal, modal };
