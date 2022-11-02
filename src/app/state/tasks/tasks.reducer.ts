import {createReducer, on} from "@ngrx/store";

import {getTaskList, addTask, removeTask, changeProgress, editTask} from "./tasks.actions";
import {Task} from "../../core/board/board/board.model";

export const initialTasksState: ReadonlyArray<Task> = [];

export const tasksReducer = createReducer(
  initialTasksState,
  on(getTaskList, (state, { tasks }) => tasks),
  on(addTask, (state, { task }) => [...state, task]),
  on(removeTask, (state, { taskId }) => state.filter((task) => task.id !== taskId)),
  on(changeProgress, (state, {taskId, changeTo}) => {
    const res: Array<Task> = []
    for (let i = 0; i < state.length; i++) {
      if (state[i].id === taskId) {
        const task = {...state[i]}
        task.progress = changeTo
        res.push(task)
        continue
      }
      res.push(state[i])
    }
    return res;
  }),
  on(editTask, (state, {newData}) => {
    const res: Array<Task> = []
    for (let i = 0; i < state.length; i++) {
      if (state[i].id === newData.id) {
        res.push(newData)
        continue
      }
      res.push(state[i])
    }
    return res;
  })
)
