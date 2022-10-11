import { Action, State } from "../types/types"

// dispatch set the action and reducer return the state updated
export const reducer = (state: State, action: Action): State =>{
  switch(action.type){
    case 'ASCENDING':
      console.log('asc');
      return {
       ...state,
      }

    case 'DESCENDING':
      console.log('desc');
      return {
        ...state,
       }
    default: 
      return state
  }
}