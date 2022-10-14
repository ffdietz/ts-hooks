import {
  useRef, useContext, useCallback, ChangeEvent,
} from 'react';
import { FilterContextType } from '../types/types';
import { UserFilterContext } from '../utils/FilterContext';

function UserFilterInput() {
  const inputFilterRef = useRef<HTMLInputElement>(null);
  const { setFilter } = useContext<FilterContextType>(UserFilterContext);

  const handleFilter = useCallback((event: ChangeEvent<HTMLInputElement>): void => (
    event.target?.value ? setFilter(event.target.value) : setFilter(' ')
  ), []);

  return (
    <div className="input-filter-container">
      <img src="/assets/icon.svg" alt="" />
      <input
        ref={inputFilterRef}
        onChange={handleFilter}
        type="text"
        placeholder="search..."
      />
    </div>
  );
}

export default UserFilterInput;
