import {createAction, props} from "@ngrx/store";

import {Task} from "../../core/board/board/board.model";

export const addTask = createAction(
  '[Task List] Add Task',
  props<{task: Task}>()
)

export const removeTask = createAction(
  '[Task List] Remove Task',
  props<{taskId: number}>()
)

export const getTaskList = createAction(
  '[Task List] Get Task List',
  props<{tasks: ReadonlyArray<Task>}>()
)
