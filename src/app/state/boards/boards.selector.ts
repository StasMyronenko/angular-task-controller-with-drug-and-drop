import {createFeatureSelector, createSelector} from "@ngrx/store";
import {BoardModel, TaskProgress} from "../../core/board/board/board.model";
import {selectTasks} from "../tasks/tasks.selector";
import {sortOptionsEnumerate} from "../../core/dashboard/dashboard/dashboard.model";


export const selectBoards = createFeatureSelector<ReadonlyArray<BoardModel>>('boards')

export const selectReversedBoards = (isReverse: boolean = false) => createSelector(
  selectBoards,
  (boards) => isReverse ? [...boards].reverse() : boards
)

export const selectSortedBoards = (sortedBy = sortOptionsEnumerate.title) => createSelector(
  selectBoards,
  selectTasks,
  (boards, tasks) => {
    console.log(typeof sortedBy)
    if (sortedBy === sortOptionsEnumerate.title) {
      return [...boards].sort((board, next_board) => {
        return board.title > next_board.title ? 1 : -1
      })
    } else if (sortedBy === sortOptionsEnumerate.creation_date) {
      return [...boards].sort((board, next_board) => {
        return +(new Date(board.creation_date)) > +(new Date(next_board.creation_date)) ? 1 : -1
      })
    } else {
      const tasksCount = (tasksBoardId: number, progress: TaskProgress) => tasks.filter(
        (task) => task.boardId === tasksBoardId && task.progress === progress
      ).length

      const sortBoards = (progress: TaskProgress) => {
        return [...boards].sort((board, next_board) => {
          const count_task_1 = tasksCount(board.id, progress)
          const count_task_2 = tasksCount(next_board.id, progress)
          return count_task_2 - count_task_1
        })
      }

      switch (sortedBy){
        case (sortOptionsEnumerate.count_todo):
          return sortBoards(TaskProgress.todo)
        case (sortOptionsEnumerate.count_in_progress):
          return sortBoards(TaskProgress.in_progress)
        case (sortOptionsEnumerate.count_done):
          return sortBoards(TaskProgress.done)
        }
      }
    }
)

export const selectFilteredBoards = (filterBy: string = '') => createSelector(
  selectBoards,
  selectTasks,
  (boards, tasks) => {
    if (filterBy === '') {
      return boards
    }
    return boards.filter((board) => {
      if (board.title.includes(filterBy)) {
        return true;
      }
      const boardTasks = tasks.filter((task) => task.boardId === board.id)
      const searchedTasks = boardTasks.filter((task) => task.title.includes(filterBy))
      return searchedTasks.length > 0;
    })
  }
)
