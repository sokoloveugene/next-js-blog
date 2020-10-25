import ActionTypes from "../ActionTypes";

interface themeAction {
  type: string;
  payload: boolean;
}

export const postKeepReducer = (state = [], { type, payload }: themeAction) => {
  switch (type) {
    case ActionTypes.SAVE_POST:
      return [payload, ...state];

    case ActionTypes.UNSAVE_POST:
      return [...state].filter((id) => id !== payload);

    default:
      return state;
  }
};
export default postKeepReducer;
