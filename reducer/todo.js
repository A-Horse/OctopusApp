import { normalize } from 'normalizr';
import R from 'ramda';
import { CREATE_TODO_SUCCESS, UPDATE_TODO_REQUEST, UPDATE_TODO_SUCCESS } from '../action/todo';
import { Todo, Todos } from '../schema';
import Actions from '../action/actioner';

const todo = (
  state = {
    results: {},
    entities: {}
  },
  action
) => {
  switch (action.type) {
    case Actions.GET_TODOLIST.SUCCESS:
      const todosNormalized = normalize(action.playload, Todos);
      const todosResult = R.assoc(action.meta.boxId, todosNormalized.result, {});
      return {
        ...state,
        results: { ...state.results, ...todosResult },
        entities: { ...state.entities, ...todosNormalized.entities.todo }
      };
      break;
    case Actions.ADD_TODO.SUCCESS:
      const createdNormalized = normalize(action.playload, Todo);
      const newBoxResult = R.assoc(
        action.playload.todoBoxId,
        [createdNormalized.result, ...state.results[action.playload.todoBoxId]],
        {}
      );
      return {
        ...state,
        results: { ...state.results, ...newBoxResult },
        entities: { ...state.entities, ...createdNormalized.entities.todo }
      };
      break;

    case Actions.UPDATE_TODO.SUCCESS:
      const todoNormalized = normalize(action.playload, Todo);
      return {
        ...state,
        entities: { ...state.entities, ...todoNormalized.entities.todo }
      };
      break;
    case UPDATE_TODO_SUCCESS:
      const createdTodoNormalized = normalize(action.playload, Todo);
      return {
        ...state,
        entities: { ...state.entities, ...createdTodoNormalized.entities.todo }
      };
    default:
      return state;
  }
};

export default todo;
