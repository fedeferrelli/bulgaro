import { useState, useEffect } from "react";
import { fetchData } from "./api";

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "./firebase/firebase";


import Links from "./components/Links/Links";
import ShowTestDetail from "./components/showTestDetail/ShowTestDetail";

function App() {
  const [data, setData] = useState();
  const [categories, setCategories] = useState();

  const getData = async () => {
    onSnapshot(collection(db, "platos"), (querySnapshot) => {
      let cities = [];
      querySnapshot.forEach((doc) => {
        cities.push(doc.data());
      });

      setData(cities);
    });
  };

  const getCategories = async () => {
    onSnapshot(collection(db, "categorias"), (querySnapshot) => {
      let cats = [];
      querySnapshot.forEach((doc) => {
        cats.push(doc.data());
      });

      setCategories(
        cats
          .sort((a, b) => {
            return +a.ubicacion > +b.ubicacion ? 1 : -1;
          })
          .map((cat) => cat.nueva_categoria)
      );
    });
  };

  useEffect(() => {
    getData();
    getCategories();
  }, []);

  return (
    <div className="bg-white sm:bg-main min-h-screen flex">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Links data={data} categories={categories} />}
          />
          <Route path="/:dish" element={<ShowTestDetail data={data} />} />
        </Routes>
      </Router>{" "}
    </div>
  );
}

export default App;
