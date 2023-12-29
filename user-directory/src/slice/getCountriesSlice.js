import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  country: undefined,
};
const getCountriesSlice = createSlice({
  name: "countryList",
  initialState: initialState,
  reducers: {
    getCountriesSliceRequest: (state) => {
      return {
        ...state,
        country: { loading: true },
      };
    },
    getCountriesSliceSuccess: (state, action) => {
      return {
        ...state,
        country: action.payload.data,
      };
    },
    getCountriesSliceFailure: (state) => {
      return {
        ...state,
        country: { loading: false },
      };
    },
  },
});
export const {
  getCountriesSliceRequest,
  getCountriesSliceSuccess,
  getCountriesSliceFailure,
} = getCountriesSlice.actions;
export default getCountriesSlice.reducer;
