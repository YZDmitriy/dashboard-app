import { createSlice } from '@reduxjs/toolkit';

const positionSlice = createSlice({
  name: '@@position',
  initialState: [],
  reducers: {
    addPosition: (_, action) => action.payload,
  },
});

export const { addPosition } = positionSlice.actions;
export const positionReducer = positionSlice.reducer;

export const selectVisiblePositions = (state, filters = []) => {
  if (filters.lenght === 0) {
    return state.positions;
  }
  return state.positions.filter((pos) => {
    const posFiltres = [].concat(
      pos.role,
      pos.level,
      ...pos.languages,
      ...pos.tools
    );
    return filters.every(filter => posFiltres.includes(filter))
  });
};
