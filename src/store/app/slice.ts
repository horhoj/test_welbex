import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppRedirectUrl, SLICE_NAME } from './types';

interface AppState {
  redirectUrl: AppRedirectUrl | null;
  isAuthenticated: boolean;
}

const initialState: AppState = {
  redirectUrl: null,
  isAuthenticated: false,
};

export const { actions, reducer } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    // в компоненте RedirectExecutor мы отслеживаем изменение
    // redirectUrl и соответственно делаем redirect
    // это нужно что бы не привязывать компоненты к роутеру
    // и была возможность делать переадресацию из redux-middleware
    // без доступа напрямую к HISTORY API
    redirect: (state, action: PayloadAction<string>) => {
      state.redirectUrl = {
        path: action.payload,
      };
    },

    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});
