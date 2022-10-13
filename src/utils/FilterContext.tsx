import { createContext, useMemo, useState } from 'react';

import { FilterProviderProps, FilterContextType } from '../types/types';

// create useContext default value
export const UserFilterContext = createContext<FilterContextType>({
  filterUser: '',
  setFilter: () => {},
});

// define a context provider and useState to be global
export function UserFilterProvider({ children } : FilterProviderProps) {
  const [filterUser, setFilter] = useState<string>('');

  const value = useMemo(() => ({ filterUser, setFilter }), [filterUser]);

  return (
    <UserFilterContext.Provider value={value}>
      {children}
    </UserFilterContext.Provider>
  );
}

// https://blog.agney.dev/useMemo-inside-context/
