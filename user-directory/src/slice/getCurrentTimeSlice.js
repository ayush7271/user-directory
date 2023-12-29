import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentTime: undefined,
};
const getCurrentTimeSlice = createSlice({
  name: "currentTime",
  initialState: initialState,
  reducers: {
    getCurrentTimeSliceRequest: (state) => {
      return {
        ...state,
        currentTime: { loading: true },
      };
    },
    getCurrentTimeSliceSuccess: (state, action) => {
      return {
        ...state,
        currentTime: action.payload.data,
      };
    },
    getCurrentTimeSliceFailure: (state) => {
      return {
        ...state,
        currentTime: { loading: false },
      };
    },
  },
});
export const {
  getCurrentTimeSliceRequest,
  getCurrentTimeSliceSuccess,
  getCurrentTimeSliceFailure,
} = getCurrentTimeSlice.actions;
export default getCurrentTimeSlice.reducer;
