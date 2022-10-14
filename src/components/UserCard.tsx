import {
  UserCardProps,
} from '../types/types';

function UserCard({ user }: UserCardProps) {
  return (
    <div className="card-container">
      <img className="card-cover-img" src={user.picture.large} alt="user.img" />
      <div className="card-details">
        <span className="card-name">
          {user.name.first}
          <br />
          {user.name.last}
        </span>
        <span>
          _user_
          {user.login.username}
        </span>
        {/* <span>{user.email}</span> */}
        <span>
          _movil_
          {user.cell}
        </span>
        <span>
          _age_
          {user.dob.age}
        </span>
        <span>
          _nat_
          {user.nat}
        </span>
      </div>
    </div>
  );
}

export default UserCard;
