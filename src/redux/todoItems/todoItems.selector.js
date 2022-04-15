import { createSelector } from "reselect";

export const selectTodo = state => state.todo;

export const selectTodoItems = createSelector(
    [selectTodo],
    todo => todo.todoItems
)