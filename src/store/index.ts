import { combineReducers, createStore } from 'redux';
import { todoReducer } from './todo/reducers';

const rootReducer = combineReducers( {
  todo: todoReducer
} );

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const store = createStore( rootReducer );
  return store;
}