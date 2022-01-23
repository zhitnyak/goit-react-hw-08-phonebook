import { useSelector, useDispatch } from "react-redux";
import css from "./Filter.module.css";
import { filter } from "../../redux/filter/filter-actions";

export default function Filter() {
  const value = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <label className={css.label}>
      Filter
      <input
        className={css.input}
        type="text"
        name="name"
        placeholder="Enter some letters to search"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        value={value}
        onChange={(e) => dispatch(filter(e.currentTarget.value))}
      ></input>
    </label>
  );
}
