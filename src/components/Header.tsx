import HeaderTitle from "./HeaderTitle"
import UserFilterInput from "./UserFilterInput"
import SortList from "./SortList";

const Header = () => {
  return(
    <div className="list-header">
      <HeaderTitle/>
      <UserFilterInput />
      <SortList/>
    </div>
  )
}

export default Header
