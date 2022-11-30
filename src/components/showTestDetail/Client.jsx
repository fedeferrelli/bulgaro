import React from "react";

function Client({ client }) {
  return (
    <div className="font-bold mt-4 flex flex-col gap-4 sm:gap-8">
      <h1 className="text-3xl sm:text-4xl">
        Cliente: <span className="capitalize">{client}</span>
      </h1>

      <h1 className="text-2xl sm:text-3xl">
        Test: Test de usabilidad en el sitio web
      </h1>
    </div>
  );
}

export default Client;
