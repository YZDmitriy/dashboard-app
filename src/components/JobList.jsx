import { useSelector, useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectVisiblePositions } from 'store/positions/position-selectors';
import { addFilter } from 'store/filtres/filtres-actions';
import { selectFilters } from 'store/filtres/filtres-selector';

const JobList = () => {
  const dispatch = useDispatch();
  const currentFiltres = useSelector(selectFilters);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFiltres)
  );

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className='job-list'>
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          {...item}
          handleAddFilter={handleAddFilter}
        />
      ))}
    </div>
  );
};

export { JobList };
