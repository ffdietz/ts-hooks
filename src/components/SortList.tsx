
const reducer = (state: State, action: Action): State =>{
  switch(action.type){
    case 'ASCENDING':{
      
    }
  }
}

const SortList = () => {
  return (
    <div className="sorting-icons">
      <div>▲</div>
      <div>▼</div>
      <span>first name</span>
      <span>last name</span>
      <span>age</span>
      <span>nat</span>
      <span>username</span>
    </div>
  )
}

export default SortList