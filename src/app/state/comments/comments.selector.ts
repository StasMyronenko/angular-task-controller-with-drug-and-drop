import {createFeatureSelector, createSelector} from "@ngrx/store";
import { Comment } from "../../core/board/board/board.model";

export const selectComments = createFeatureSelector<ReadonlyArray<Comment>>('comments')

export const selectAllComments = createSelector(
  selectComments,
  (comments) => comments
)

export const selectCountComments = createSelector(
  selectComments,
  (comments) => comments.length
)
