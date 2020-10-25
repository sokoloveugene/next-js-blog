export interface IState {
  savedPosts: string[];
}

export const getSavedPosts = (state: IState) => state.savedPosts;
