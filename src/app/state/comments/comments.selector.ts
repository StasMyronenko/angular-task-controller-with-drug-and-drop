import { createFeatureSelector } from "@ngrx/store";
import { Comment } from "../../core/board/board/board.model";

export const selectComments = createFeatureSelector<ReadonlyArray<Comment>>('comments')
