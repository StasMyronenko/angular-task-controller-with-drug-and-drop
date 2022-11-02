import {createFeatureSelector, createSelector} from "@ngrx/store";
import {BoardModel, Task, TaskProgress} from "../../core/board/board/board.model";
import {selectTasks} from "../tasks/tasks.selector";
import {sortOptionsEnumerateBoard} from "../../core/dashboard/dashboard/dashboard.model";


export const selectBoards = createFeatureSelector<ReadonlyArray<BoardModel>>('boards')

export const selectFilteredBoards = (
  filterBy: string = '',
  sortedBy = sortOptionsEnumerateBoard.title,
  isReverse: boolean = false
) => createSelector(
  selectBoards,
  selectTasks,
  (boards, tasks) => {
    let res = [...boards]
    res = filterBoards(res, tasks, filterBy);
    res = sortBoards(res, tasks, sortedBy);
    res = reverseBoards(res, isReverse);
    return res
  }
)

const reverseBoards = (boards: ReadonlyArray<BoardModel>, isReverse: boolean = false): Array<BoardModel> => (
  isReverse ? [...boards].reverse() : [...boards]
);

const sortBoards = (
  boards: ReadonlyArray<BoardModel>,
  tasks: ReadonlyArray<Task>,
  sortedBy = sortOptionsEnumerateBoard.title
): Array<BoardModel> => {
    if (sortedBy === sortOptionsEnumerateBoard.title) {
      return [...boards].sort((board, next_board) => {
        return board.title > next_board.title ? 1 : -1
      })
    } else if (sortedBy === sortOptionsEnumerateBoard.creation_date) {
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
        case (sortOptionsEnumerateBoard.count_todo):
          return sortBoards(TaskProgress.todo)
        case (sortOptionsEnumerateBoard.count_in_progress):
          return sortBoards(TaskProgress.in_progress)
        case (sortOptionsEnumerateBoard.count_done):
          return sortBoards(TaskProgress.done)
        }
      }
    }

const filterBoards = (boards: ReadonlyArray<BoardModel>, tasks: ReadonlyArray<Task>, filterBy: string = ''): Array<BoardModel> =>  {
    if (filterBy === '') {
      return [...boards]
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
