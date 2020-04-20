export interface List {
    id: number,
    name: string
}

export interface TodoState {
    lists: List[]
}

export const REMOVE_LIST_FROM_TODO = 'REMOVE_LIST_FROM_TODO';
export const ADD_LIST_TO_TODO = 'ADD_LIST_TO_TODO';

interface RemoveListFromTodo {
    type: typeof REMOVE_LIST_FROM_TODO,
    payload: number
}

interface AddListToTodo {
    type: typeof ADD_LIST_TO_TODO,
    payload: List
}

export type TodoActionTypes = RemoveListFromTodo | AddListToTodo;

