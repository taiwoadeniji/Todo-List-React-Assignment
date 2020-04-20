import {TodoActionTypes, ADD_LIST_TO_TODO, REMOVE_LIST_FROM_TODO, List } from './types';

export function addListToTodo (list: List): TodoActionTypes {
    return {
        type: ADD_LIST_TO_TODO,
        payload: list

    }
}

export function removeListFromTodo (id: number): TodoActionTypes {
    return {
        type: REMOVE_LIST_FROM_TODO,
        payload: id
    }
}
