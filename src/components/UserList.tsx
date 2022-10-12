import { useContext, useEffect, useMemo, useReducer, useState } from "react";
import { 
  User,
  UsersListProps, 
  FilterContextType,
  State,
} from '../types/types'

import UserCard from "./UserCard";
import {UserFilterContext} from '../utils/FilterContext'

import { reducer} from '../utils/SortReducer';
import SortList from "./SortList";

const UsersList = ({users}: UsersListProps) => {
  const [usersList] = useState<User[]>(users);
  const [filteredList, setFilteredList] = useState<User[]>(usersList)

  //useContext
  const { filterUser } = useContext<FilterContextType>(UserFilterContext);

  // sortedUser is the state (initialzed with initialState)
  // dispatch is what is call to update the state. Call the reducer function with parameters
  const initialState: State = {users: filteredList};
  const [sortedUser, dispatch] = useReducer(reducer, initialState);

  const filteredUsers: User[] = useMemo(() =>
    usersList.filter((user) => 
      user.name.first.toLowerCase().includes(filterUser.toLowerCase()) ||
      user.name.last.toLowerCase().includes(filterUser.toLowerCase())
  ), [filterUser]);
  
  useEffect(() => {
    setFilteredList(filteredUsers);
  }, [filteredUsers])

  return(
    <>
      <SortList dispatch={dispatch}/>
      <div className="card-list-container">
      {
        sortedUser.users
        .map((userDetails : User, key: number)=>{
          return(
            <div key={key}>
                <UserCard user={userDetails}/>
              </div>
              )
            })
          }
      </div>
    </>
  )
}

export default UsersList;
