import { createSlice } from '@reduxjs/toolkit';

/* 
  when chat is implemented specific ones can be entered depending on the user
  most of the user stuff is useless cos of firebase hooks but put them in anyway
*/
export const appSlice = createSlice({
  name: 'app',
  initialState: {
    user: null,
    chatID: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    enterChat: (state, action) => {
      state.chatID = action.payload.chatID;
    },
  },
});

export const { login, logout, enterChat } = appSlice.actions;

export const selectUser = (state: any) => state.user.user;

export const selectchatID = (state: any) => state.app.chatID;

export default appSlice.reducer;