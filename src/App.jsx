import "./App.css";
import { useEffect } from "react";
import { getDatas } from "./store/reducers/getRequestReducer";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const coffees = useSelector((state) => state.getRequestReducer.coffees);
  const loader = useSelector((state) => state.getRequestReducer.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDatas());
  }, [dispatch]);
  return (
    <>
      {loader ? (
        <p>Loading...</p>
      ) : (
        <div className="coffee_container">
          {coffees.map((coffee) => (
            <div key={coffee.id}>
              <p>{coffee.title}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
