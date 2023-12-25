import styles from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { GET_QUERY } from "../../store/actions/getQueryAction";

export const Header = () => {
  const query = useSelector((state) => state.getRequestReducer.query);
  const dispatch = useDispatch();
  return (
    <header className={styles.header}>
      <h1 className={styles.header_title}>Coffees</h1>
      <input
        className={styles.search_inp}
        type="search"
        placeholder="Search..."
        value={query}
        onChange={(e) =>
          dispatch({
            type: GET_QUERY,
            payload: { query: e.target.value },
          })
        }
      />
    </header>
  );
};
