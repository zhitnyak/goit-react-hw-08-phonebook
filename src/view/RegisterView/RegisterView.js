import { useState } from "react";
import s from "./RegisterView.module.css";
import authOperations from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          name="name"
          placeholder="Steve Jobs"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          onChange={handleChange}
          value={name}
          className={s.input}
        />
      </label>
      <label className={s.label}>
        Email
        <input
          name="email"
          placeholder="qwerty@mail.com"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
          onChange={handleChange}
          value={email}
          className={s.input}
        />
      </label>
      <label className={s.label}>
        Password
        <input
          name="password"
          type="password"
          required
          onChange={handleChange}
          value={password}
          className={s.input}
        />
      </label>
      <button className={s.btn} type="submit">
        Sign up
      </button>
    </form>
  );
}
