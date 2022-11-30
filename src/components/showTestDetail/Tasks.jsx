import React from "react";

function Tasks({ tasks, scenario, changeText }) {
  return (
    <div className="mt-8 flex flex-col gap-4 sm:gap-6  max-w-[500px]">
      <section className="flex flex-col gap-4 sm:gap-6">
        <h1 className="font-semibold text-2xl">Tareas</h1>
        <p className="text-lg">Escenario: {scenario}</p>
      </section>
      <section className="flex flex-col gap-4 sm:gap-6">
        {tasks.map((task, index) => {
          const { texto, tipoTarea, respuesta, tiempo } = task;
          return (
            <div key={index} className="p-4 border-t border-t-secondary/80">
              <p><strong>Tarea {index + 1}:</strong></p>
              <p><strong>{changeText(texto)}</strong></p>
              {tipoTarea === "opinionScale5" ? (
                <h2 className="font-normal mt-4">Respuesta: {respuesta}</h2>
              ) : null}
              <p className="font-normal mt-4 text-terciary">Duracion de la tarea: {tiempo}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Tasks;
