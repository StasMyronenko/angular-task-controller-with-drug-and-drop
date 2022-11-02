import {sortOptionsEnumerateBoard} from "../../../core/dashboard/dashboard/dashboard.model";
import {sortOptionsEnumerateTask} from "../../../core/board/board/board.model";

export interface sortOption {
  title: string,
  value: sortOptionsEnumerateBoard | sortOptionsEnumerateTask
}
