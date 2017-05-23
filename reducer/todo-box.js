import { normalize } from 'normalizr';
import R from 'ramda';
import { GET_TODOBOX_SUCCESS } from '../action/todo';
import { TodoBoxs } from '../schema';

const todoBox = (
  state = {
    results: {},
    entities: {}
  },
  action
) => {
  switch (action.type) {
  case GET_TODOBOX_SUCCESS:
    const normalized = normalize(action.playload.todoBoxs, TodoBoxs);
    return {
      ...state,
      ...normalized
    };
  default:
    return state;
  }
};

export default todoBox;