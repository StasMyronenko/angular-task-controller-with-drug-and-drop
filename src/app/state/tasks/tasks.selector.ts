import {createFeatureSelector, createSelector} from "@ngrx/store";
import {sortOptionsEnumerateTask, Task, TaskProgress} from "../../core/board/board/board.model";
import {sortOptionsEnumerateBoard} from "../../core/dashboard/dashboard/dashboard.model";

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

export const selectFilteredTasksByProcess = (
  filterBy: string | null=null,
  sortBy: sortOptionsEnumerateTask | null=sortOptionsEnumerateTask.title,
  reverse:boolean | null=false) => {
  return createSelector(
    selectTasks,
    (tasks) => {
      let data = [...tasks]
      const res: { todo: Task[], in_progress: Task[], done: Task[] } = {
        todo: [],
        in_progress: [],
        done: []
      }

      if (filterBy !== null) {
        data = data.filter(task => task.title.includes(filterBy))
      }

      data.sort((task, nextTask) => {
        switch (sortBy) {
          case (sortOptionsEnumerateTask.creation_date):
            return +(new Date(task.creation_date)) - +(new Date(nextTask.creation_date))
          default:
            return (+(task.title > nextTask.title) * 2) - 1 // if it is true we will have 1 else -1. Sort by title
        }
      })


      data = reverse ? data.reverse() : data;

      data.forEach((task) => {
        switch (task.progress) {
          case TaskProgress.todo:
            res.todo.push(task);
            break;
          case TaskProgress.in_progress:
            res.in_progress.push(task);
            break;
          case TaskProgress.done:
            res.done.push(task);
        }
      })
      return res;
    }
  );
}

export const selectArchivedTasks = createSelector(
  selectTasks,
  (tasks) => {
    return tasks.filter(task => task.archived)
  }
)
