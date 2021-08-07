import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: null,
  selectedImage: 0,
  status: 'idle',
};


export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    login: (state,action) => {

      state.user = action.payload;
    },
    logout: (state,action) => {

      state.user = null;
    },
    selectImage: (state,action) => {

      state.selectImage = action.payload;
    },
    resetImage: (state,action) => {

      state.selectImage = null;
    },
  },
});

export const { login,logout,selectImage,resetImage} = appSlice.actions;

export const selectUser = (state) => state.app.user;
export const selectselectedImage = (state) => state.app.selectImage;


export default appSlice.reducer;
