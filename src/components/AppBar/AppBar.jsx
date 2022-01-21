import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import s from "./AppBar.module.css";
import { getIsLoggedIn } from "../../redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <NavLink className={s.link} to="/">
          Homepage
        </NavLink>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
}
