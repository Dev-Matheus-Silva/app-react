import { Link } from "react-router-dom";
import Avatar from "../atoms/Avatar";

function UserListItem(props) {
  return (
    <Link to={`/users/${props.id}`} className="users__list-item">
      <div className="users__list-item-photo">
        <Avatar src={props.src} alt="" />
      </div>
      <div className="users__list-item-name">{props.name}</div>
    </Link>
  );
}

export default UserListItem;
