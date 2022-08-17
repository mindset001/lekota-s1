import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userProfile: {},
  accessToken: '',
  refreshToken: '',
  firstLaunch: true,
  userFetching: false,
  notifications: [],
  notificationsFetching: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.userProfile = action.payload;
    },
    addAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    addRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
    updateFirstLaunch : (state, action) => {
      state.firstLaunch = action.payload;
    },
    updateUserFetching: (state, action) => {
      state.userFetching = action.payload
    },
    updateNotifications: (state, action) => {
      state.notifications = action.payload
    },
    updateNotificationFetching: (state, action) => {
      state.notificationsFetching = action.payload
    },
  },
});

export const {updateUser, addAccessToken, addRefreshToken, updateFirstLaunch, updateUserFetching, updateNotifications, updateNotificationFetching} =
  userSlice.actions;

export default userSlice.reducer;
