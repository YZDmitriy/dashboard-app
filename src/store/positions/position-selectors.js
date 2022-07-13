export const selectAllPositions = (state) => state.positions;

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
