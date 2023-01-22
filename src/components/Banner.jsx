import React from "react";

const Banner = () => {
  return (
    <>
      <div className="container my-4">
        <div className="row">
          <div className="col mt-5">
            <h3 className="text-center">
              Consulta, reclamo, sugerencia, felicitación o solicitud
            </h3>
            <p className="text-center">
              Beneficiarios: Consulta, Felicitación, Reclamo o Solicitud -
              Prestador Jurídico: Consultas y Solicitudes Inscripción,
            </p>
            <p className="text-center">
              Actualización y Renuncia - Prestador Natural: Consultas
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-9 border">
              <p className="p-2 m-0">
                Recomendación: Si tienes dudas sobre cómo realizar este
                servicio, consulta la pestaña "Instrucciones" justo a la derecha
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
