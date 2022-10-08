import { useEffect, useState } from "react";
import './index.css'
import { User, Users, ApiRequest, UsersListProps, UserCardProps } from './types'


const UserCard = ({user}: UserCardProps) => {
  return(
    <div className="card-container">
      <img src={'picture'} alt="" />
      <h3>{user.name.first} {user.name.last}</h3>
      {/* <p>{user.email}</p> */}
    </div>
    )
}

const UsersList = ({users}: UsersListProps) => {
  const [usersList, setUserList] = useState<Users>(users);
  return(
    <div className="card-list-container">
      {
        usersList.map((userDetails : User, key: number)=>{
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

const App = () => {
  const [users, setUsers] = useState<Users>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(()=>{
    fetch('./users.json')
    .then((resp) => resp.json())
    //add type in fetching before transform json?
    .then((data: ApiRequest) => {
      setUsers(data.results);
      setLoading(false);
      })
  }, []);

  return (
    <div className="App">
      {
        isLoading ? <h2>loading...</h2>
        :
        <UsersList users={users}/>
        }
    </div>
  );
}

export default App;
