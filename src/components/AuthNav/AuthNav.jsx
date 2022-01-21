import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/login"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Log in
      </NavLink>
      <NavLink
        to="/register"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Sign up
      </NavLink>
    </div>
  );
}
