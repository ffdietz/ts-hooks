import { useRef, useContext } from "react";
import {
  FilterContextType
} from '../types/types'
import {UserFilterContext} from '../utils/FilterContext'

const UserFilterInput = () => {
  const inputFilterRef = useRef<HTMLInputElement>(null);
  const { setFilter } = useContext<FilterContextType>(UserFilterContext);

  function handleFilter (event : any){
    event.target?.value ? 
      setFilter(event.target.value)
      :
      setFilter('');
  }

  return(
    <div className="input-filter-container">
      <img src={"/assets/icon.svg"} alt=""/>
      <input ref={inputFilterRef} onChange={handleFilter} type="text" placeholder="search..."/>
    </div>
  )
}

export default UserFilterInput
