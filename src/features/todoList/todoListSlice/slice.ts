import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RequestError } from '../../../store/types';
import { TodoItem } from '../types';
import { getErrorData } from '../../../store/helpers';
import { SLICE_NAME } from './types';
import * as thunks from './thunks';

interface InitialState {
  isLoading: boolean;
  error: RequestError | null;
  todoList: TodoItem[] | null;
  currentPage: number;
  searchStr: string;
}

const initialState: InitialState = {
  error: null,
  isLoading: false,
  todoList: null,
  currentPage: 1,
  searchStr: '',
};

export const { actions, reducer } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },

    toggleCompleted: (state, action: PayloadAction<number>) => {
      if (state.todoList !== null) {
        const index = state.todoList.findIndex(
          (todoItem) => todoItem.id === action.payload,
        );

        const currentTodoItem = state.todoList[index];

        state.todoList[index] = {
          ...currentTodoItem,
          completed: !currentTodoItem.completed,
        };
      }
    },

    deleteTodoItem: (state, action: PayloadAction<number>) => {
      if (state.todoList !== null) {
        state.todoList = state.todoList.filter(
          (todoItem) => todoItem.id !== action.payload,
        );
      }
    },

    patchTodoItem: (state, action: PayloadAction<TodoItem>) => {
      if (state.todoList !== null) {
        const newData: TodoItem = action.payload;
        const todoItemIndex = state.todoList.findIndex(
          (todoItem) => todoItem.id === newData.id,
        );
        state.todoList[todoItemIndex] = newData;
      }
    },

    addTodoItem: (state, action: PayloadAction<TodoItem>) => {
      if (state.todoList !== null) {
        //новый ид вычисляем как максимальный среди текущих + 1;
        const newId =
          Math.max(...state.todoList.map((todoItem) => todoItem.id)) + 1;

        const newTodoItem: TodoItem = { ...action.payload, id: newId };

        state.todoList.push(newTodoItem);
      }
    },

    setSearchStr: (state, action: PayloadAction<string>) => {
      state.currentPage = 1;
      state.searchStr = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(thunks.getTodoListRequest.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.todoList = null;
      })
      .addCase(thunks.getTodoListRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todoList = action.payload;
      })
      .addCase(thunks.getTodoListRequest.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = getErrorData(error);
      });
  },
});
