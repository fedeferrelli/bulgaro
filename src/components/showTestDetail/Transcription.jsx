import React from "react";

function Transcription({ transcription, changeText }) {
  return (
    <div className="mt-8">
      <h1 className="font-semibold text-2xl">Transcripción</h1>
      <p className="mt-8 whitespace-pre-line max-w-[600px] max-h-[300px] px-12 pb-15 overflow-scroll leading-6">{changeText(transcription)}</p>
    </div>
  );
}

export default Transcription;
