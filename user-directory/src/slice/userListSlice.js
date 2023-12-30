import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: undefined,
};
const userListSlice = createSlice({
  name: "userList",
  initialState: initialState,
  reducers: {
    getUserDetailsRequest: (state) => {
      return {
        ...state,
        user: { loading: true },
      };
    },
    getUserDetailsSuccess: (state, action) => {
      return {
        ...state,
        user: action.payload.data,
      };
    },
    getUserDetailsFailure: (state) => {
      return {
        ...state,
        user: { loading: false },
      };
    },
  },
});
export const {
  getUserDetailsRequest,
  getUserDetailsSuccess,
  getUserDetailsFailure,
} = userListSlice.actions;
export default userListSlice.reducer;
