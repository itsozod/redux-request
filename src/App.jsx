import "./App.css";
import { useState, useEffect } from "react";
// import { getDatas } from "./store/reducers/getRequestReducer";
// import { useDispatch, useSelector } from "react-redux";
// const coffees = useSelector((state) => state.getRequestReducer.coffees);
// const loader = useSelector((state) => state.getRequestReducer.loading);
// const dispatch = useDispatch();
// useEffect(() => {
//   dispatch(getDatas());
// }, [dispatch]);

function App() {
  const [coffees, setCoffees] = useState([]);
  const [query, setQuery] = useState("");
  const [loader, setLoader] = useState(false);
  const [maxPrice, setMaxPrice] = useState(3);

  const getCoffees = async () => {
    try {
      setLoader(true);
      const response = await fetch("http://localhost:3000/coffees");
      const data = await response.json();
      setCoffees(data);
      setLoader(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getCoffees();
  }, []);

  const handleCoffees = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value === "") {
      getCoffees();
    } else {
      const filteredCoffees = coffees.filter((coffee) => {
        return coffee.title.toLowerCase().includes(value.toLowerCase());
      });
      setCoffees(filteredCoffees);
    }
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setMaxPrice(value);
  };

  const filterCoffees = coffees.filter(
    (coffee) => coffee.price >= 0 && coffee.price <= maxPrice
  );
  return (
    <>
      <label>
        Filter by price ${0} - ${maxPrice}`
      </label>
      <input
        type="range"
        min="0"
        max="3"
        value={maxPrice}
        onChange={(e) => handlePriceChange(e)}
      />
      <input
        type="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => handleCoffees(e)}
      />
      {loader ? (
        <p className="loader">Loading...</p>
      ) : (
        <div className="coffee_container">
          {filterCoffees.map((coffee) => (
            <div className="coffee_card" key={coffee.id}>
              <p>{coffee.title}</p>
              <img className="coffee_img" src={coffee.img} alt={coffee.title} />
              <p>{coffee.price}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
