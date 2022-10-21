import { createFeatureSelector, createSelector } from "@ngrx/store";
import {BoardModel} from "../../core/board/board/board.model";

export const selectBoards = createFeatureSelector<ReadonlyArray<BoardModel>>('boards')
