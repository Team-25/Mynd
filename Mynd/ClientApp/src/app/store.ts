import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../extra/appSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
