import { useSelector } from 'react-redux';

import { selectVisiblePositions } from './position-slice';
import { selectFilters } from '../filter/filter-slice';

export const usePositions = () => {
  const currentFiltres = useSelector(selectFilters);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFiltres)
  );

  return positions;
};
