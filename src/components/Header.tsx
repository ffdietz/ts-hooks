import HeaderTitle from "./HeaderTitle"
import UserFilterInput from "./UserFilterInput"

const Header = () => {
  return(
    <div className="list-header">
      <HeaderTitle/>
      <UserFilterInput />
    </div>
  )
}

export default Header
