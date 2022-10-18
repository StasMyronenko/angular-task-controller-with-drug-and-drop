export interface RequestBoardModel {
  title: string,
  description: string,
  tasks: Array<Task>,
  columns_color: ColumnsColor
  creation_date: string,
  userId: string
}

export interface BoardModel extends  RequestBoardModel{
  id: number
}

export interface RequestTask {
  title: string,
  description: string,
  progress: TaskProgress,
  creation_date: string,
  comments: Array<Comment>,
  archived: boolean
}

export interface Task extends RequestTask{
  id: number;
}

export interface Comment {
  name: string,
  title: string,
  comment: string,
  creation_date: string
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
