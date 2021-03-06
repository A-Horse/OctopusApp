//      
import { compose, createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import reduxReset from 'redux-reset';
import logger from 'redux-logger';

import { reducers } from '../reducer';
import rootEpic from '../epic';

const persistConfig = {
  key: 'root',
  keyPrefix: '',
  timeout: 30000,
  debounce: 100,
  storage
};

function setupStore() {
  const persistedReducer = persistReducer(persistConfig, combineReducers(reducers));
  const epicMiddleware = createEpicMiddleware();

  const store = createStore(
    persistedReducer,
    compose(
      applyMiddleware(epicMiddleware, logger),
      reduxReset()
    )
  );

  return { store, epicMiddleware };
}

const storeAndEpicMiddleware = setupStore();

export const persistor = persistStore(storeAndEpicMiddleware.store, null, () => {});

/* store.dispatch({ type: 'RESET' });
 * persistor.purge();
 */
storeAndEpicMiddleware.epicMiddleware.run(rootEpic);
export const store = storeAndEpicMiddleware.store;
