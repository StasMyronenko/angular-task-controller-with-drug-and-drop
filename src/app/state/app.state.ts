import {BoardModel, Task} from "../core/board/board/board.model";

export interface AppState {
  boards: ReadonlyArray<BoardModel>
  tasks: ReadonlyArray<Task>
  comments: ReadonlyArray<Comment>
}
