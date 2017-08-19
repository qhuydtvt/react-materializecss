import { SHOW_DIALOG, HIDE_DIALOG } from "../actions";

export default function(state = { open: false }, action) {
  switch (action.type) {
    case SHOW_DIALOG:
      return {
          open: true,
          item: action.payload
      };
    case HIDE_DIALOG:
      return {
        open: false,
        item: null
      };
  }
  return state;
}
