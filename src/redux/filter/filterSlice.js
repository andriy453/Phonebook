import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  filter: '',
};


export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export const getFilterValue = state => state.filters;
export const filtersReducer = filterSlice.reducer;
