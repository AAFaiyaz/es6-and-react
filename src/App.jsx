import { useState } from "react";
import "./App.css";
import Watch from "./components/Watch/Watch";
import { useEffect } from "react";

function App() {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch("watches.json")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);

  // const watches = [
  //   {
  //     id: 1,
  //     name: "Apple Watch Series 7",
  //     price: 399,
  //     image:
  //       "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  //   },
  //   {
  //     id: 2,
  //     name: "Samsung Galaxy Watch 4",
  //     price: 249,
  //     image:
  //       "https://images.unsplash.com/photo-1579771576273-8437d5da3a8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  //   },
  //   {
  //     id: 3,
  //     name: "Fitbit Sense",
  //     price: 299,
  //     image:
  //       "https://images.unsplash.com/photo-1612088690974-6ba117bd5392?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  //   },
  //   {
  //     id: 4,
  //     name: "Garmin Venu 2",
  //     price: 399,
  //     image:
  //       "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  //   },
  //   {
  //     id: 5,
  //     name: "Amazfit GTS 3",
  //     price: 179,
  //     image:
  //       "https://images.unsplash.com/photo-1599488605961-249a6840a224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  //   },
  // ];

  return (
    <>
      <h1>Vite + React</h1>
      {watches.map((watch) => (
        <Watch key={watch.id} watch={watch}></Watch>
      ))}
    </>
  );
}

export default App;
