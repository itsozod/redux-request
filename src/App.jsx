import "./App.css";
import { useEffect } from "react";
import { getDatas } from "./store/functions/getRequestFn";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "./components/loader/Loader";
import { Header } from "./components/header/Header";
import { Card } from "./components/card/Card";

function App() {
  const coffees = useSelector((state) => state.getRequestReducer.coffees);
  const loader = useSelector((state) => state.getRequestReducer.loading);
  const query = useSelector((state) => state.getRequestReducer.query);
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
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </div>
      )}
    </>
  );
}

export default App;
