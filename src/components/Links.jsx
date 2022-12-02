import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

import { AiOutlineArrowUp } from "react-icons/ai";

import Loading from "./Loading";

function Links({ data, categories }) {
  const [categoriesToShow, setCategoriesToShow] = useState();
  const [showLoading, setShowLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [dataToShow, setDataToShow] = useState([]);

  useEffect(() => {
    const setCat = () => {
      const filteredData = data.filter(
        (dish) =>
          dish.plato.toLowerCase().includes(search.toLowerCase()) ||
          dish.descripcion.toLowerCase().includes(search.toLowerCase()) ||
          dish.categoria.toLowerCase().includes(search.toLowerCase()) ||
          dish.tags.toLowerCase().includes(search.toLowerCase())
      );

      const catInData = filteredData.map((dish) => dish.categoria);

      const cat = [];

      categories.map(
        (category) => catInData.includes(category) && cat.push(category)
      );

      setCategoriesToShow(cat);

      setDataToShow(filteredData);

      setShowLoading(false);
    };

    categories && data && setCat();
  }, [data, categories, search]);

  const handlePrice = (string) => {
    return "$" + Number(string).toLocaleString("de-DE");
  };

  return showLoading ? (
    <>
      <Loading />
    </>
  ) : (
    <div className="py-4 pb-20 flex flex-col gap-4 bg-slate-700 px-1 w-full">
      <div id="search" className="px-1">
        <input
          className="sm:w-40 w-full focus:w-full p-2 px-3 rounded-full my-4 ease-in-out duration-700 outline-none
                border-gray-100 border bg-white text-gray-800 font-extralight"
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Buscar"
        />
      </div>

      <section className="w-full flex flex-wrap justify-evenly sm:justify-start mt-2 mb-6 gap-2 sm:gap-6">
        {categoriesToShow?.map((cat) => {
          return (
            <LinkScroll
              key={cat}
              to={`${cat}`}
              spy={true}
              smooth={true}
              offset={-10}
              duration={1000}
              className="px-3 py-2 shadow text-gray-600 rounded-full bg-slate-200 text-sm scroll-smooth"
            >
              {cat}
            </LinkScroll>
          );
        })}
      </section>

      {categoriesToShow?.map((categoria) => (
        <section
          className="w-full rounded-lg border py-3 px-2 border-gray-400/20 shadow-lg  mx-auto bg-white "
          id={`${categoria}`}
        >
          <h1 className="text-4xl text-center capitalize font-bold text-gray-600">
            {categoria}
          </h1>

          <ul className="mt-4 font-bold text-xl">
            {dataToShow
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
      <LinkScroll
        className="rounded-full bg-gray-200 shadow-xl text-center text-gray-700 right-3 bottom-3 fixed border border-gray-300/80 flex"
        activeClass="active"
        to="search"
        spy={true}
        smooth={true}
        offset={-10}
        duration={500}
      >
        <span className="w-full m-auto rounded-full p-4 text-2xl text-gray-700">
          {" "}
          <AiOutlineArrowUp />{" "}
        </span>
      </LinkScroll>
    </div>
  );
}

export default Links;
