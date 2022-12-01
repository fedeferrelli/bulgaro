import { useState, useEffect} from 'react'

import { HashRouter as Router, Route, Routes } from "react-router-dom";

import { fetchData } from './api';

import Links from './components/Links';
import ShowTestDetail from './components/showTestDetail/ShowTestDetail'
function App() {

  const [data, setData] = useState()
  const [categories, setCategoies] = useState()


  const getData = async () => {
    const dataApi = await fetchData.fetchMenuData();
    setData(dataApi.filter(dish=>dish.existencia === 'si'));
    
  };

  const getCategories = async () =>{
    const categoriesApi = await fetchData.fetchCategories();
    setCategoies(categoriesApi.sort((a, b) => {return (+a.posicion > +b.posicion) ? 1 : -1}).map(cat=>cat.nueva_categoria));
    
  }

useEffect(() => {
        getData();
        getCategories();
      }, []);

console.log(categories)
  return (
    <div className="">
<Router>
            <Routes>
              <Route path="/" element={<Links data={data} categories={categories} />} />
              <Route path="/:dish" element={<ShowTestDetail data={data} />} />
            </Routes>
          </Router>    </div>
  )
}

export default App
