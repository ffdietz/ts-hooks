import { useContext, useEffect, useReducer, useState } from "react";
import { 
  User,
  UsersListProps, 
  FilterContextType,
  State,
  SortAction,
  ActionPayload,
} from '../types/types'

import UserCard from "./UserCard";
import {UserFilterContext} from '../utils/FilterContext'

import { reducer} from '../utils/SortReducer';

const UsersList = ({users}: UsersListProps) => {
  const [usersList] = useState<User[]>(users);
  const [filteredList, setFilteredList] = useState<User[]>(usersList)

  //useContext
  const { filterUser } = useContext<FilterContextType>(UserFilterContext);

  // sortedUser is the state (initialzed with initialState)
  // dispatch is what is call to update the state. Call the reducer function with parameters
  const initialState: State = {users: filteredList};
  const [sortedUser, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const filteredUsers: User[] = usersList.filter((user) => 
      user.name.first.toLowerCase().includes(filterUser.toLowerCase()) ||
      user.name.last.toLowerCase().includes(filterUser.toLowerCase())
    );
    setFilteredList(filteredUsers);
  }, [])

  return(
    <div className="card-list-container">
      <button onClick={ () => dispatch({ type: SortAction.DIRECTION })}
      > DIR </button>

      <button onClick={ () => 
        dispatch({ 
          type: SortAction.FIRST_NAME, 
          payload: {
            direction: ActionPayload.ASCENDING
        }})}
      > FIRST </button>

      <button onClick={ () => 
        dispatch({ 
          type: SortAction.LAST_NAME, 
          payload: {
            direction: ActionPayload.ASCENDING
        }})}
      > LAST </button>

      <button onClick={ () => 
        dispatch({ 
          type: SortAction.AGE, 
          payload: {
            direction: ActionPayload.ASCENDING
        }})}
      > AGE </button>

      <button onClick={ () => 
        dispatch({ 
          type: SortAction.NAT, 
          payload: {
            direction: ActionPayload.ASCENDING
        }})}
      > NATIONALITY </button>
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
  )
}

export default UsersList;
