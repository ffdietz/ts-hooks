import { useEffect, useState } from "react";
import { 
  User,
  ApiRequest,
} from '../types/types'
import { UserFilterProvider} from '../utils/FilterContext'

import Header from "./Header";
import UsersList from "./UserList";

const App = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<User[]>([]);

  async function fetchUsers(){
    const apiResponse = await fetch("./users.json");
    const userBody: ApiRequest = await apiResponse.json();

    setUsers(userBody.results);
    setLoading(false);
  }

  useEffect(()=>{
    fetchUsers()
  }, []);

  return (
    <div className="App">
      {
        isLoading ? <h2>loading...</h2>
        :
        <UserFilterProvider>
          <Header/>
          <UsersList users={users}/>
        </UserFilterProvider>
        }
    </div>
  );
}

export default App;


// hooks example // https://github.com/jherr/no-bs-ts/blob/master/series-1/episode-21/src/App.tsx
// useContext // https://dev.to/ms_yogii/usecontext-for-better-state-management-51hi