import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userPost: undefined,
};
const getUserPostSlice = createSlice({
  name: "UserPost",
  initialState: initialState,
  reducers: {
    getUserPostSliceRequest: (state) => {
      return {
        ...state,
        userPost: { loading: true },
      };
    },
    getUserPostSliceSuccess: (state, action) => {
      return {
        ...state,
        userPost: action.payload.data,
      };
    },
    getUserPostSliceFailure: (state) => {
      return {
        ...state,
        userPost: { loading: false },
      };
    },
  },
});
export const {
  getUserPostSliceRequest,
  getUserPostSliceSuccess,
  getUserPostSliceFailure,
} = getUserPostSlice.actions;
export default getUserPostSlice.reducer;
