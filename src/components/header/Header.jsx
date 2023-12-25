import styles from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { GET_QUERY } from "../../store/actions/getQueryAction";
import { GET_PRICE_ACTION } from "../../store/actions/getPriceAction";

export const Header = () => {
  const maxPrice = useSelector((state) => state.getRequestReducer.maxPrice);
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
      <div className={styles.filter_container}>
        <label>Filter by price: ${maxPrice}</label>
        <input
          type="range"
          min="0"
          max="10"
          value={maxPrice}
          onChange={(e) =>
            dispatch({
              type: GET_PRICE_ACTION,
              payload: {
                maxPrice: e.target.value,
              },
            })
          }
        />
      </div>
    </header>
  );
};
