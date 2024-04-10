import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState : {
    roomId:"null",
    password:"null",
  },
  reducers: {
    enterRoom: (state,action) => {
      state.roomId = action.payload.roomId;
      state.password = action.payload.password;
    },
  },
});

export const { enterRoom } = appSlice.actions;

export const selectRoomId = (state) => state.app.roomId;
export const selectPassword = (state) => state.app.password;

export default appSlice.reducer;
