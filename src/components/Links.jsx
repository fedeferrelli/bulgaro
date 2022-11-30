import { Link } from "react-router-dom";

function Links({data}) {

  return (
    <ul className="mt-4 font-bold text-xl">
      {data?.map((data, i) => (
        <li key={i} className="mt-2" >
          <Link className="hover:text-secondary/80 duration-300" to={`/${data.plato}`}>
            {data.plato}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Links;
