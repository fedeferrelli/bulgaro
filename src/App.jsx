import { useState, useEffect} from 'react'

import { HashRouter as Router, Route, Routes } from "react-router-dom";

import { fetchData } from './api';

import Links from './components/Links';
import ShowTestDetail from './components/showTestDetail/ShowTestDetail'
function App() {

  const [data, setData] = useState()


  const getData = async () => {
    const dataApi = await fetchData.fetchMenuData();
    setData(dataApi.filter(dish=>dish.existencia === 'si'));
    
  };

useEffect(() => {
        getData();
      }, []);


  return (
    <div className="">
<Router>
            <Routes>
              <Route path="/" element={<Links data={data} />} />
              <Route path="/:dish" element={<ShowTestDetail data={data} />} />
            </Routes>
          </Router>    </div>
  )
}

export default App
