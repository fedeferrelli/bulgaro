import React from 'react'
import { Link as LinkScroll } from "react-scroll";

function Categories({categories}) {
    return (
        <section className="w-full flex flex-wrap justify-evenly sm:justify-start mt-2 mb-6 gap-2 sm:gap-6">
        {categories?.map((cat) => {
          return (
            <LinkScroll
              key={cat}
              to={`${cat}`}
              spy={true}
              smooth={true}
              offset={-10}
              duration={1000}
              className="px-3 py-2 shadow text-gray-600 rounded-full bg-slate-200 text-sm sm:cursor-pointer sm:hover:shadow-xl sm:duration-300"
            >
              {cat}
            </LinkScroll>
          );
        })}
      </section>
    )
}

export default Categories
