import {sortOptionsEnumerateBoard} from "../../../features/dashboard/dashboard/dashboard.model";
import {sortOptionsEnumerateTask} from "../../../features/board/board/board.model";

export interface sortOption {
  title: string,
  value: sortOptionsEnumerateBoard | sortOptionsEnumerateTask
}
