export interface BoardModel {
  id?: number,
  title: string,
  description: string,
  tasks: Array<Task>,
  columns_color: ColumnsColor
  creation_date: string,
  userId: string
}

export interface Task {
  title: string,
  progress: TaskProgress,
  creation_date: string,
  comments: Array<Comment>
}

export interface Comment {
  name: string,
  title: string,
  description: string
}

export interface ColumnsColor {
  todo_color: string;
  in_progress_color: string,
  done_color: string,
}

export enum TaskProgress {
  todo = 0,
  in_progress = 1,
  done = 2
}


export interface EditBoardModel {
  title: string,
  description?: string,
}
