import {createAction, props} from "@ngrx/store";
import {Comment} from "../../core/board/board/board.model";

export const addComment = createAction(
  '[Comment List] Add Comment',
  props<{comment: Comment}>()
)

export const removeComment = createAction(
  '[Comment List] Remove Comment',
  props<{commentId: number}>()
)

export const getCommentList = createAction(
  '[Comment List] Get User Board\'s Comments',
  props<{comments: ReadonlyArray<Comment>}>()
)
