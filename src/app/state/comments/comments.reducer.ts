import {createReducer, on} from "@ngrx/store";

import {addComment, removeComment, getCommentList} from "./comments.actions";
import {Comment} from "../../core/board/board/board.model";

export const initialCommentsState: ReadonlyArray<Comment> = [];

export const commentsReducer = createReducer(
  initialCommentsState,
  on(addComment, (state, { comment }) => [...state, comment] ),
  on(removeComment, (state, {commentId}) => state.filter(comment => comment.id !== commentId)),
  on(getCommentList, (state, { comments }) => comments)
)
