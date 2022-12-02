import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Loading from "../Loading";

function ShowTestDetail({ data }) {
  const { dish } = useParams();
  const [selectedDish, setSelectedDish] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const setDish = () => {
      setSelectedDish(data.find((plato) => plato.plato === dish));
      setShowLoading(false);
    };
    typeof data !== "undefined" && setDish();
  }, [data]);

  const navigate = useNavigate();

  const handlePrice = (string) => {
    return "$" + Number(string).toLocaleString("de-DE");
  };

  return showLoading ? (
    <>
      <Loading />
    </>
  ) : (
    <section className="pb-4 bg-white min-h-screen w-full">
      <div className="w-full ">
        <div className="">
          <img
            className=""
            src={selectedDish?.image}
            loading="lazy"
            alt={`imagen para ${selectedDish?.title}`}
          ></img>{" "}
        </div>
        <div className="p-2 w-full">
          <h1 className="text-2xl text-left capitalize font-semibold text-gray-600">
            {" "}
            {selectedDish.plato}
          </h1>
          <div className="flex justify-left">
            <div className="rounded-full bg-gray-200 w-auto text-gray-400 px-2 py-1 text-sm">
              {" "}
              {selectedDish.categoria}{" "}
            </div>{" "}
          </div>

          <h1 className="text-2xl font-bold text-left capitalize text-gray-600 mt-3">
            {" "}
            {handlePrice(selectedDish.precio)}
          </h1>

          <p className="text-left text-gray-500 mt-2 text-md max-w-prose">
            {" "}
            {selectedDish.descripcion}
          </p>
        </div>
      </div>
      <button
        onClick={() => navigate("/")}
        className="px-4 py-3 rounded-full bg-gray-200 shadow-xl text-center text-gray-700 right-3 bottom-3 fixed border border-gray-300/80"
      >
        Volver al Menú
      </button>
    </section>
  );
}

export default ShowTestDetail;
