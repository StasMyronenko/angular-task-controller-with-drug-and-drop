import * as selectors from './boards.selector';

import {BoardModel, TaskProgress} from "../../features/board/board/board.model";
import {AppState} from "../app.state";
import {sortOptionsEnumerateBoard} from "../../features/dashboard/dashboard/dashboard.model";

const initialBoardsState: ReadonlyArray<BoardModel> = [
  {
    title: 'Astring',
    description: 'string',
    columns_color: {
      todo_color: '#FFF',
      in_progress_color: '#FFF',
      done_color: '#FFF',
    },
    creation_date: '1.1.1',
    userId: 1,
    id: 1
  },
  {
    title: 'string2',
    description: 'string',
    columns_color: {
      todo_color: '#FFF',
      in_progress_color: '#FFF',
      done_color: '#FFF',
    },
    creation_date: '3.3.3',
    userId: 2,
    id: 2
  },
  {
    title: 'Bstring',
    description: 'string',
    columns_color: {
      todo_color: '#FFF',
      in_progress_color: '#FFF',
      done_color: '#FFF',
    },
    creation_date: '2.2.2',
    userId: 3,
    id: 3
  },
];

const initialTasksState = [
  {
    title: 'qqstring',
    description: 'string',
    progress: 0,
    creation_date: 'string',
    archived: false,
    boardId: 1,
    id: 1,
  },
  {
    title: 'string',
    description: 'qstring',
    progress: 2,
    creation_date: 'string',
    archived: false,
    boardId: 2,
    id: 2,
  },
  {
    title: 'string',
    description: 'string',
    progress: 1,
    creation_date: 'string',
    archived: false,
    boardId: 3,
    id: 3,
  }
]

const createStore = (): AppState => ({
  boards: initialBoardsState,
  tasks: initialTasksState,
  comments: []
});

describe('store boards selector', () => {
  let store: AppState;

  beforeEach(async () => {
    store = createStore();
  })

  it('should return all data', () => {
    const data = selectors.selectFilteredBoards()(store);
    expect(data).toEqual([initialBoardsState[0], initialBoardsState[2], initialBoardsState[1]]);
  })

  it('should return call reverseBoards', () => {
    const data = selectors.selectFilteredBoards('', sortOptionsEnumerateBoard.title, true)(store);
    expect(data).toEqual([...[initialBoardsState[0], initialBoardsState[2], initialBoardsState[1]]].reverse());
  })

  it('should use params by default in reverseBoards', () => {
    const data = selectors.reverseBoards(initialBoardsState);
    expect(data).toEqual(initialBoardsState)
  })

  it('should use params by default in filterBoards', () => {
    const data = selectors.filterBoards(initialBoardsState, []);
    expect(data).toEqual(initialBoardsState)
  })

  it('should filter data', () => {
    const data = selectors.filterBoards(initialBoardsState, [], '2');
    expect(data).toEqual([initialBoardsState[1]])
  })

  it('should use params by default in sortBoards', () => {
    const data = selectors.sortBoards(initialBoardsState, []);
    expect(data).toEqual([initialBoardsState[0], initialBoardsState[2], initialBoardsState[1]])
  })

  it('should use sort by data', () => {
    const data = selectors.sortBoards(initialBoardsState, [], sortOptionsEnumerateBoard.creation_date);
    expect(data).toEqual([initialBoardsState[0], initialBoardsState[2], initialBoardsState[1]])
  })

  it('should sort by TaskProgress todo', () => {
    const data = selectors.sortBoards(initialBoardsState, [], sortOptionsEnumerateBoard.count_todo);
    expect(data).toEqual(initialBoardsState);
  })

  it('should sort by TaskProgress in progress', () => {
    const data = selectors.sortBoards(initialBoardsState, [], sortOptionsEnumerateBoard.count_in_progress);
    expect(data).toEqual(initialBoardsState);
  })

  it('should sort by TaskProgress in progress', () => {
    const data = selectors.sortBoards(initialBoardsState, [], sortOptionsEnumerateBoard.count_done);
    expect(data).toEqual(initialBoardsState);
  })

  it('should filter by task title', () => {
    const data = selectors.selectFilteredBoards('q')(store);
    expect(data).toEqual([initialBoardsState[0]])
  })
})
