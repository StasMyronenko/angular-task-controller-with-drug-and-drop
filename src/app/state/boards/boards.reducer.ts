import { createReducer, on } from "@ngrx/store";

import {getBoardList, addBoard, removeBoard, updateBoard} from "./boards.actions";
import {BoardModel} from "../../features/board/board/board.model";

export const initialBoardsState: ReadonlyArray<BoardModel> = [];

export const boardsReducer = createReducer(
  initialBoardsState,
  on(getBoardList, (state, { boards }) => boards),
  on(addBoard, (state, { board }) => {
    return [...state, board]
  }),
  on(updateBoard, (state, {board}) => {
    return [...state.filter((stateBoard) => stateBoard.id !== board.id), board]
  }),
  on(removeBoard, (state, {boardId}) => {
    return state.filter((board) => board.id !== boardId)
  })
)
