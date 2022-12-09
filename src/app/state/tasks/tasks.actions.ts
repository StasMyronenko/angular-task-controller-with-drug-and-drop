import {createAction, props} from "@ngrx/store";

import {Task, TaskProgress} from "../../features/board/board/board.model";

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

export const changeProgress = createAction(
  '[Task List] Change Task Progress',
  props<{taskId: number, changeTo: TaskProgress}>()
)

export const editTask = createAction(
  '[Task List] Edit Task',
  props<{newData: Task}>()
)
