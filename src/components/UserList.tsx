import { useContext, useEffect, useState } from "react";
import { 
  User,
  UsersListProps, 
  FilterContextType,
} from '../types/types'

import UserCard from "./UserCard";

import {UserFilterContext} from '../utils/FilterContext'

const UsersList = ({users}: UsersListProps) => {
  const [usersList] = useState<User[]>(users);
  const [filteredList, setFilteredList] = useState<User[]>(usersList)
  const { filterUser } = useContext<FilterContextType>(UserFilterContext);

  useEffect(() => {
    const filteredUsers: User[] = usersList.filter((user) => 
      user.name.first.toLowerCase().includes(filterUser.toLowerCase()) ||
      user.name.last.toLowerCase().includes(filterUser.toLowerCase())
    );
    setFilteredList(filteredUsers);
  }, [filterUser])

  return(
    <div className="card-list-container">
    {
      filteredList
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
