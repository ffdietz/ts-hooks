import { Action, SortAction, State } from "../types/types"

// dispatch set the action and reducer return the state updated
export const reducer = (state: State, action: Action): State =>{
  
  console.log(action);

  switch(action.type){
    case SortAction.DIRECTION:
      return {
        ...state,
        users: state.users.reverse()
       }
    case SortAction.FIRST_NAME:
      return {
        ...state,
        users: state.users.sort((a, b) => 
        a.name.first.localeCompare(b.name.first))
       }
    case SortAction.LAST_NAME:
      return {
        ...state,
        users: state.users.sort((a, b) => 
        a.name.last.localeCompare(b.name.last))
      }
    case SortAction.AGE:
      return {
        ...state,
        users: state.users.sort((a, b) => 
        a.dob.age - b.dob.age)
      }
      case SortAction.NAT:
        return {
          ...state,
          users: state.users.sort((a, b) => 
          a.nat.localeCompare(b.nat))
        }
    default: 
      return state
  }
}