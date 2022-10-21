import {createReducer, on} from "@ngrx/store";

import {getTaskList, addTask, removeTask} from "./tasks.actions";
import {Task} from "../../core/board/board/board.model";

export const initialTasksState: ReadonlyArray<Task> = [];

export const tasksReducer = createReducer(
  initialTasksState,
  on(getTaskList, (state, { tasks }) => tasks),
  on(addTask, (state, { task }) => [...state, task]),
  on(removeTask, (state, { taskId }) => state.filter((task) => task.id !== taskId))
)
