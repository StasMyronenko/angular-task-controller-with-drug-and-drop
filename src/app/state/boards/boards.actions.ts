import {createAction, props} from "@ngrx/store";

import {BoardModel} from "../../core/board/board/board.model";

export const addBoard = createAction(
  '[Board List] Add Board',
  props<{board: BoardModel}>()
)

export const removeBoard = createAction(
  '[Board List] Remove Board',
  props<{boardId: number}>()
)

export const updateBoard = createAction(
  '[Board List] Update Board By Id',
  props<{board: BoardModel}>()
)

export const getBoardList = createAction(
  '[Board List] Get Board List',
  props<{boards: ReadonlyArray<BoardModel>}>()
)
