import { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { fetchData } from "./api";

import Links from "./components/Links/Links";
import ShowTestDetail from "./components/showTestDetail/ShowTestDetail";

function App() {
  const [data, setData] = useState();
  const [categories, setCategories] = useState();

  const getData = async () => {
    const dataApi = await fetchData.fetchMenuData();
    setData(dataApi.filter((dish) => dish.existencia === true));
  };

  const getCategories = async () => {
    const categoriesApi = await fetchData.fetchCategories();
    setCategories(
      categoriesApi
        .sort((a, b) => {
          return +a.ubicacion > +b.ubicacion ? 1 : -1;
        })
        .map((cat) => cat.nueva_categoria)
    );
  };

  useEffect(() => {
    getData();
    getCategories();
  }, []);

  return (
    <div className="bg-white sm:bg-main min-h-screen flex flex-col justify-center">
      <section>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Links data={data} categories={categories} />}
            />
            <Route path="/:dish" element={<ShowTestDetail data={data} />} />
          </Routes>
        </Router>{" "}
      </section>
    </div>
  );
}

export default App;
