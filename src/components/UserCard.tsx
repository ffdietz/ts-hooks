import {
  UserCardProps,
} from '../types/types';

function UserCard({ user }: UserCardProps) {
  return (
    <div className="card-container">
      <img className="card-cover-img" src={user.picture.large} alt="user.img" />
      <span className="card-name">
        {user.name.first}
        <br />
        {user.name.last}
      </span>
      <span>
        {user.login.username}
        <br />
        _user
        {' '}
      </span>
      {/* <span>{user.email}</span> */}
      <span>
        {user.cell}
        {' '}
        _movil
      </span>
      <span>
        {user.dob.age}
        {' '}
        _age
      </span>
      <span>
        {user.nat}
        {' '}
        _nat
      </span>
    </div>
  );
}

export default UserCard;
