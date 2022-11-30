import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Client from "./Client";
import TesterNumber from "./TesterNumber";
import Video from "./Video";
import Transcription from "./Transcription";
import Tasks from "./Tasks";

function ShowTestDetail({data}) {

  const { dish } = useParams();
  const [dataToShow, setDataToShow] = useState([]);

  useEffect(() => {
    
    const setDish = () => {
    setDataToShow(data.find(plato=>plato.plato===dish));
    };
    typeof data !== "undefined" && setDish();
  }, [data]);

  console.log(dish)

console.log(dataToShow)
 
 return (
    <div>
   {dataToShow && 
 
    <div>{dataToShow?.plato} </div>}
  </div>
);

}

export default ShowTestDetail;
