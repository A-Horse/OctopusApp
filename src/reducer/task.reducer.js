// @flow
import Actions from '../action/actions';
import { normalize } from 'normalizr';
import { TaskBoards, TaskBoard, TaskCard, TaskTrack } from '../schema';

export function task(state = {}, action: FSAction) {
  switch (action.type) {
    case Actions.GET_TASK_BOARD_LIST.REQUEST:
      return {
        ...state
      };
    case Actions.GET_TASK_BOARD_LIST.SUCCESS:
      const normalizedAllBoard = normalize(action.payload, TaskBoards);
      return {
        ...state,
        taskBoardMap: normalizedAllBoard.entities.TaskBoard
      };
    case Actions.GET_TASK_BOARD.SUCCESS:
      const normalizedAddBoard = normalize(action.payload, TaskBoard);
      return {
        ...state,
        taskBoardMap: {
          ...state.taskBoradMap,
          ...normalizedAddBoard.entities.TaskBoard
        },
        taskCardMap: {
          ...state.taskCardMap,
          ...normalizedAddBoard.entities.TaskCard
        },
        taskTrackMap: {
          ...state.taskTrackMap,
          ...normalizedAddBoard.entities.TaskTrack
        }
      };
    default:
      return state;
  }
}