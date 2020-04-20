import { TodoState, REMOVE_LIST_FROM_TODO, ADD_LIST_TO_TODO, TodoActionTypes } from './types';

const initialState: TodoState = {
    lists: [
        {
            id: 1,
            name: 'Go to school'
        },
        {
            id: 2,
            name: 'Go to work'
        },
        {
            id: 3,
            name: 'Attend meeting'
        },
        {
            id: 4,
            name: 'Go for Lunch'
        },
        {
            id: 5,
            name: 'Go home'
        }
    ]
}
export function todoReducer ( state = initialState, action: TodoActionTypes ) {
  switch ( action.type ) {
    case REMOVE_LIST_FROM_TODO:
      return {
        ...state,
        lists: state.lists.filter( list => list.id !== action.payload )
      }
    case ADD_LIST_TO_TODO:
      return {
        ...state,
        // Add one new item onto the end of our array!
        lists: [ ...state.lists, action.payload ]
      }
    default:
      return state;
  }
}
