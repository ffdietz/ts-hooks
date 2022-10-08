import { useEffect, useState } from "react";
import { User, Users, ApiRequest, UsersListProps, UserCardProps } from './types'


const UserCard = ({user}: UserCardProps) => {
  return(
    <div>
      {user.email}
    </div>
    )
}

const UsersList = ({users}: UsersListProps) => {
  const [usersList, setUserList] = useState<Users>(users);
  return(
    <>
      {
        usersList.map((userDetails : User, key: number)=>{
          return(
            <div key={key}>
              <UserCard user={userDetails}/>
            </div>
            )
        })
      }
    </>
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
