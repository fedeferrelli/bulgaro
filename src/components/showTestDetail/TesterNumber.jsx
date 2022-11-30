import React from "react";

function TesterNumber({ testerNumber }) {
  return (
    <div className="font-bold mt-8 sm:mt-10 text-2xl sm:text-3xl">
      Testeador <span>{testerNumber}</span>
    </div>
  );
}

export default TesterNumber;
