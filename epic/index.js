import { combineEpics } from 'redux-observable';

import { auth, signup } from './auth';
import { todos, createTodo, destoryTodo, getTodoBoxs, updateTodo } from './todo';

export default combineEpics(
  auth,
  signup,

  todos,
  createTodo,
  destoryTodo,
  getTodoBoxs,
  updateTodo
);
