import { actions, reducer } from './slice';
import * as selectors from './selectors';
import * as thunks from './thunks';

export const todoListSlice = { actions, reducer, selectors, thunks };
