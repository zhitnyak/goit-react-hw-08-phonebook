import { useSelector, useDispatch } from "react-redux";
import css from "./Filter.module.css";
import { filter } from "../../redux/filter/filter-actions";

export default function Filter() {
  const value = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <div className={css.box}>
      <label className={css.contact}>
        Filter
        <input
          className={css.input}
          type="text"
          name="name"
          placeholder="Enter contact name"
          value={value}
          onChange={(e) => dispatch(filter(e.currentTarget.value))}
        ></input>
      </label>
    </div>
  );
}
