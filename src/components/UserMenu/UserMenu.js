import css from "./UserMenu.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getUsername } from "../../redux/auth/authSelectors";
import authOperations from "../../redux/auth/authOperations";

export default function UserMenu() {
  const username = useSelector(getUsername);
  const dispatch = useDispatch();

  return (
    <div>
      <span className={css.text}>Welcome, {username}</span>
      <button
        className={css.btn}
        type={"button"}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </button>
    </div>
  );
}
