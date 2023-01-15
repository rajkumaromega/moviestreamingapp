import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../features/userSlice";
import counterReducer from '../features/counterSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
