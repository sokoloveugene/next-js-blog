import ActionTypes from "../ActionTypes";

export const savePost = (postId: string) => ({
  type: ActionTypes.SAVE_POST,
  payload: postId,
});

export const unSavePost = (postId: string) => ({
  type: ActionTypes.UNSAVE_POST,
  payload: postId,
});
