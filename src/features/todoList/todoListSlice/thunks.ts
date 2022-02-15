import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosRequestConfig } from 'axios';
import { getDefaultRequestConfig } from '../../../api/helpers';
import { TodoItem } from '../types';
import { SLICE_NAME } from './types';

export const getTodoListRequest = createAsyncThunk(
  `${SLICE_NAME}/getTodoListRequest`,
  async () => {
    const requestConfig: AxiosRequestConfig = {
      ...getDefaultRequestConfig(),
      method: 'get',
      url: '/todos',
    };

    const response = await axios.request<TodoItem[]>(requestConfig);

    return response.data;
  },
);
