import {createFeatureSelector, createSelector} from "@ngrx/store";
import {Task, TaskProgress} from "../../core/board/board/board.model";

export const selectTasks = createFeatureSelector<ReadonlyArray<Task>>('tasks')

export const selectTasksCount = (boardId: number) => createSelector(
  selectTasks,
  (tasks) => {
    const data = tasks.filter(task => task.boardId === boardId)
    const res = {
      todo: 0,
      in_progress: 0,
      done: 0
    }
    data.forEach((task) => {
      switch (task.progress) {
        case TaskProgress.todo:
          res.todo += 1
          break;
        case TaskProgress.in_progress:
          res.in_progress += 1;
          break;
        case TaskProgress.done:
          res.done += 1;
      }
    })
    return res;
  }
)
