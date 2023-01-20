import { useState, useEffect } from "react";
import InputFile from "../components/InputFile";
import SelectList from "../components/SelectList";
import useAppContext from "../hooks/useAppContext";
import useSelectList from "../hooks/useSelectList";

const Tramites = () => {
  const {
    tipoUsuario,
    tipoSolicitud,
    tipificacion,
    isLoading,
    getTipoSolicitud,
    getListarTipificacion,
  } = useAppContext();


  const [SelectTipoUsuario, mundo] = useSelectList(
    "Tipo Usuario:",
    tipoUsuario
  );

  const [codtipoSolicitud, setCodTipoSolicitud] = useState("");
  const [codTipificacion, setCodTipificacion] = useState("");
  //   const [tipoTipificacion, setTipoTipificacion] = useState("");

  useEffect(() => {
    if (mundo) {
      const objTipousuario = {
        tipoUsuario: mundo,
      };
      getTipoSolicitud(objTipousuario);
    }
  }, [mundo]);

  useEffect(() => {
    if (codtipoSolicitud) {
      const objTipificacion = { idTipoSolicitud: codtipoSolicitud };
      getListarTipificacion(objTipificacion);
      
    }
  }, [codtipoSolicitud]);
  

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-9">
          <h3>Datos Solicitud</h3>
          <p>
            Por favor complete los datos a continuación asociados al tipo de
            solicitud a realizar
          </p>
        </div>
        <div className="col-9 border p-4">
          {isLoading ? null : <SelectTipoUsuario />}

          <div className="row mb-4">
            <label
              className="col-sm-12 col-md-12 col-lg-3 form-label text-capitalize fw-bold"
              htmlFor="tipoSolicitud"
            >
              Tipo: <span className="text-danger">*</span>
            </label>
            <div className="col-sm-12 col-md-12 col-lg-9">
              <select
                className="form-select"
                onChange={(e) => setCodTipoSolicitud(e.target.value)}
                id="tipoSolicitud"
                disabled={!mundo && true}
              >
                <option value="">--Seleccione--</option>
                {tipoSolicitud && mundo
                  ? tipoSolicitud.listado.map((opcion) => (
                      <option
                        key={opcion.idTipoSolicitud}
                        value={opcion.idTipoSolicitud}
                      >
                        {opcion.descripcion}
                      </option>
                    ))
                  : null}
              </select>
            </div>
          </div>

          <div className="row mb-4">
            <label
              className="col-sm-12 col-md-12 col-lg-3 form-label text-capitalize fw-bold"
              htmlFor="tipoUsuario"
            >
              Concepto: <span className="text-danger">*</span>
            </label>
            <div className="col-sm-12 col-md-12 col-lg-9">
              <select
                className="form-select"
                onChange={(e) => setCodTipificacion(e.target.value)}
                id="tipoUsuario"
                disabled={!mundo && true}
              >
                <option value="">--Seleccione--</option>
                {tipoSolicitud && tipificacion
                  ? tipificacion.listado.map((opcion) => (
                      <option
                        key={opcion.idSubTipoSolicitud}
                        value={opcion.idSubTipoSolicitud}
                      >
                        {opcion.descripcion}
                      </option>
                    ))
                  : null}
              </select>
            </div>
          </div>

          {/* <SelectList
            titulo="concepto"
            data = {tipificacion}
            id = "idSubTipoSolicitud"
            handleChange={(e) => setCodTipificacion(e.target.value)}
          /> */}
          <div className="row">
            <label className="col-sm-12 col-md-12 col-lg-3 fw-bold" htmlFor="descripcion">
              Descripción: <span className="text-danger">*</span>
            </label>
            <div className="col-sm-12 col-md-12 col-lg-9">
              <textarea className="form-control" id="descripcion"></textarea>
            </div>
          </div>
        </div>
        <div className="col-9 mt-4">
          <h3>Datos Solicitud</h3>
          <p>
            Por favor complete los datos a continuación asociados al tipo de
            solicitud a realizar
          </p>
        </div>
        <div className="col-9 border p-4">
          <InputFile />
        </div>
      </div>
    </>
  );
};

export default Tramites;
