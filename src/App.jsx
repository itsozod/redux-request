import "./App.css";
import { useState, useEffect } from "react";
import { getDatas } from "./store/functions/getRequestFn";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "./components/loader/Loader";
import { Header } from "./components/header/Header";

function App() {
  const [query, setQuery] = useState("");
  const coffees = useSelector((state) => state.getRequestReducer.coffees);
  const loader = useSelector((state) => state.getRequestReducer.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDatas(query));
  }, [dispatch, query]);

  return (
    <>
      <Header />
      {loader ? (
        <Loader />
      ) : (
        <div className="coffee_container">
          {coffees.map((coffee) => (
            <div className="coffee_card" key={coffee.id}>
              <p>{coffee.title}</p>
              <img className="coffee_img" src={coffee.img} alt={coffee.title} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
