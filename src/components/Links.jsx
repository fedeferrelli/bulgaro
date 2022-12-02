import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Loading from "./Loading";

function Links({ data, categories }) {
  const [categoriesToShow, setCategoriesToShow] = useState();
  const [showLoading, setShowLoading] = useState(true);
  useEffect(() => {
    const setCat = () => {
      const catInData = data.map((dish) => dish.categoria);
      const cat = [];
      categories.map(
        (category) => catInData.includes(category) && cat.push(category)
      );
      setCategoriesToShow(cat);
      setShowLoading(false);
    };

    categories && data && setCat();
  }, [data, categories]);

  const handlePrice = (string) => {
    return "$" + Number(string).toLocaleString("de-DE");
  };

  return showLoading ? (
    <>
      <Loading />
    </>
  ) : (
    <div className="py-4 pb-20 flex flex-col gap-4 bg-slate-700 px-1">
      {categoriesToShow?.map((categoria) => (
        <section className="w-full rounded-lg border py-3 px-2 border-gray-400/20 shadow-lg  m-auto bg-white">
          <h1 className="text-4xl text-center capitalize font-bold text-gray-600">
            {categoria}
          </h1>

          <ul className="mt-4 font-bold text-xl">
            {data
              ?.filter((dish) => dish.categoria === categoria)
              .map((dish, i) => (
                <li key={i} className="mt-2">
                  <Link
                    className="hover:text-secondary/80 duration-300"
                    to={`/${dish.plato}`}
                  >
                    <div className="w-full sm:w-[250px] sm:h-[420px]  sm:bg-gray-100 rounded-md sm:rounded-b-none sm:shadow-xl sm:hover:shadow-gray-900 sm:hover:shadow-lg sm:border sm:border-gray-800/75 ease-in-out duration-500 cursor-pointer overflow-hidden relative flex sm:flex-col">
                      <div className="p-1 sm:p-0 w-2/5 min-w-[100px] h-auto sm:w-auto sm:rounded-none order-2 flex relative">
                        <img
                          className="sm:m-auto w-full h-auto border border-gray-400/20 sm:border-none sm:w-auto rounded-lg sm:rounded-none m-auto"
                          loading="lazy"
                          src={dish?.image}
                          alt={`imagen para ${dish?.title}`}
                        ></img>
                      </div>
                      <div className="p-2 w-full sm:order-2">
                        <h1 className="text-2xl text-left capitalize font-semibold text-gray-600">
                          {" "}
                          {dish.plato}
                        </h1>
                        <div className="flex justify-left"></div>

                        <h1 className="text-xl font-bold text-left capitalize text-gray-600 mt-2">
                          {" "}
                          {handlePrice(dish.precio)}
                        </h1>

                        <p className="text-left text-gray-500 mt-2 text-sm max-w-prose font-normal">
                          {" "}
                          {dish.descripcion.substring(0, 30)}...
                        </p>
                        {dish.existencia === "no" && (
                          <div className="absolute top-0 left-0 bottom-0 right-0 bg-gray-800/25 flex ">
                            <div className="w-48 p-2 m-auto rounded-full  bg-gray-100/50 text-gray-800 text-center rotate-0">
                              Sin Stock
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <hr className="my-2 sm:hidden" />
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      ))}
      <button onClick={()=>navigate('/')} className=" w-10 h-10 px-4 py-3 rounded-full bg-gray-200 shadow-xl text-center text-gray-700 right-3 bottom-3 fixed border border-gray-300/80">I</button>

    </div>
  );
}

export default Links;
