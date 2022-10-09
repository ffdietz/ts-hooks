import { useEffect, useState } from "react";
import './index.css'
import { User, Users, ApiRequest, UsersListProps, UserCardProps } from './types'


const UserCard = ({user}: UserCardProps) => {
  return(
    <div className="card-container">
      <img className="card-cover-img" src={'user.picture'} alt='user.pic'/>
      <span className="card-name">{user.name.first}<br/>{user.name.last}</span>
      <span>user_ {user.login.username}</span>
      <span className="card-email">{user.email}</span>
      <span>movil_ {user.cell}</span>
      <span>{user.dob.age} years old</span>
      <span>nat_ {user.nat}</span>
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

const UserListHeader = () => {
  return(
    <div className="list-header">
      <h1>USERS MANAGER</h1>
      <input type="text" />
      <button>submit</button>
    </div>
  )
}

const App = () => {
  const [users, setUsers] = useState<Users>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(()=>{
    fetch('./users.json')
    // Q: typing api request?
    .then((resp) => resp.json())
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
        <>
          <UserListHeader/>
          <UsersList users={users}/>
        </>
        }
    </div>
  );
}

export default App;
