import { createContext, useState } from "react";

import {FilterProviderProps, FilterContextType } from '../types/types'

// create useContext default value
export const UserFilterContext = createContext<FilterContextType>({
  filterUser: '',
  setFilter: () => {}
});

// define a context provider and useState to be global
export const UserFilterProvider = ({children} : FilterProviderProps) => {
  const [filterUser, setFilter] = useState<string>('');

  return(
    <UserFilterContext.Provider value={{filterUser, setFilter}}>
      {children}
    </UserFilterContext.Provider>
  )
}