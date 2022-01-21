import { useState } from "react";
import css from "./LoginView.module.css";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/authOperations";

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setName] = useState("");
  const [password, setNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "email":
        setName(value);
        break;
      case "password":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setNumber("");
    setName("");
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          Email
          <input
            name="email"
            placeholder="qwerty@mail.com"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
            onChange={handleChange}
            value={email}
            className={css.input}
          />
        </label>
        <label className={css.label}>
          Password
          <input
            name="password"
            required
            onChange={handleChange}
            value={password}
            type="password"
            className={css.input}
          />
        </label>
        <button className={css.btn} type="submit">
          Log in
        </button>
      </form>
    </>
  );
}
