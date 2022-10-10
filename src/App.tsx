import { createContext, useContext, useEffect, useRef, useState } from "react";
import { 
  User, 
  Users, 
  ApiRequest, 
  UsersListProps, 
  UserCardProps, 
  FilterContextType, 
  FilterProviderProps 
} from './types'
import './index.css'


const UserCard = ({user}: UserCardProps) => {
  return(
    <div className="card-container">
      <img className="card-cover-img" src={'user.picture'} alt='user.pic'/>
      <span className="card-name">{user.name.first}<br/>{user.name.last}</span>
      <span>user_ {user.login.username}</span>
      <span>{user.email}</span>
      <span>movil_ {user.cell}</span>
      <span>age_ {user.dob.age}</span>
      <span>nat_ {user.nat}</span>
    </div>
    )
}

const UsersList = ({users}: UsersListProps) => {
  const [usersList] = useState<Users>(users);
  const { filterUser } = useContext<FilterContextType>(UserFilterContext);

  console.log('filterUser :>> ', filterUser);

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

const UserFilterInput = () => {
  const inputFilterRef = useRef<HTMLInputElement>(null);
  const { setFilter } = useContext<FilterContextType>(UserFilterContext);

  const handleFilter = () => {
    // good practice??
    inputFilterRef.current?.value ? 
      setFilter(inputFilterRef.current.value)
      :
      setFilter('');
  }

  return(
    <>
      <button onClick={handleFilter}>
        <img src={"./icon.svg"} alt=""/>
      </button>
      <input ref={inputFilterRef} type="text" placeholder="search..."/>
    </>
  )
}

const Title = () => {
  return <h1>USERS MANAGER</h1>
}

const UserListHeader = () => {
  return(
    <div className="list-header">
      <Title/>
      <UserFilterInput />
    </div>
  )
}

// create useContext default value
const UserFilterContext = createContext<FilterContextType>({
  filterUser: '',
  setFilter: () => {}
});

// define a context provider and state to be shared
const UserFilterProvider = ({children} : FilterProviderProps) => {
  const [filterUser, setFilter] = useState<string>('');

  return(
    <UserFilterContext.Provider value={{filterUser, setFilter}}>
      {children}
    </UserFilterContext.Provider>
  )
}

const App = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<Users>([]);

  useEffect(()=>{
    // Q: typing api response?
    fetch('./users.json')
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
        <UserFilterProvider>
          <UserListHeader/>
          <UsersList users={users}/>
        </UserFilterProvider>
        }
    </div>
  );
}

export default App;
