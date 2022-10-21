import {createFeatureSelector} from "@ngrx/store";
import {Task} from "../../core/board/board/board.model";

export const selectTasks = createFeatureSelector<ReadonlyArray<Task>>('tasks')
