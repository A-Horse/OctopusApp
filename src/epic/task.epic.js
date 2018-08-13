// @flow
import Actions from '../action/actions';
import axios from 'axios';
import { setupAxiosJwtHeader } from '../helper/http-intercetor';
import { API_BASE } from '../env/env';
import NavigationService from '../service/single/navigation.service';

import { ofType } from 'redux-observable';
import { mergeMap, tap, ignoreElements } from 'rxjs/operators';

export const GET_TASK_BOARD_LIST = action$ => {
  return action$.pipe(
    ofType(Actions.GET_TASK_BOARD_LIST.REQUEST),
    mergeMap(action => {
      return axios
        .get(`${API_BASE}/tk/user/${action.payload.userId}/task-board`)
        .then(response => {
          return Actions.GET_TASK_BOARD_LIST.success(response.data);
        })
        .catch(error => {
          return Actions.GET_TASK_BOARD_LIST.failure(error);
        });
    })
  );
};

export const GET_TASK_BOARD_LIST_SUCCESS = action$ =>
  action$.pipe(ofType(Actions.GET_TASK_BOARD_LIST.SUCCESS), ignoreElements());

export const GET_TASK_BOARD = action$ =>
  action$.pipe(
    ofType(Actions.GET_TASK_BOARD.REQUEST),
    mergeMap(action => {
      return axios
        .get(`${API_BASE}/tk/task-board/${action.payload.id}/verbose`)
        .then(resp => Actions.GET_TASK_BOARD.success(resp.data))
        .catch(Actions.GET_TASK_BOARD.failure);
    })
  );

export const ADD_TASK_CARD = action$ =>
  action$.pipe(
    ofType(Actions.ADD_TASK_CARD.REQUEST),
    mergeMap(action => {
      return axios
        .post(`${API_BASE}/task-card`, action.payload)
        .then(Actions.ADD_TASK_CARD.success)
        .catch(Actions.ADD_TASK_CARD.failure);
    })
  );
