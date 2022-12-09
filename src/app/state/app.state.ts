import {BoardModel, Task} from "../features/board/board/board.model";

export interface AppState {
  boards: ReadonlyArray<BoardModel>
  tasks: ReadonlyArray<Task>
  comments: ReadonlyArray<Comment>
}
