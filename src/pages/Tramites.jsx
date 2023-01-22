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
    tipoTipificacion,
    isLoading,
    getTipoSolicitud,
    getListarTipificacion,
    getListarTipoTipificacion,
  } = useAppContext();

  const [SelectTipoUsuario, mundo] = useSelectList(
    "Tipo Usuario:",
    tipoUsuario
  );

  const [codtipoSolicitud, setCodTipoSolicitud] = useState("");
  const [codTipificacion, setCodTipificacion] = useState("");
  const [codTipoTipificacion, setCodTipoTipificacion] = useState("");

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

  useEffect(() => {
    if (codTipificacion) {
      const objTipificacion = { idSubTipoSolicitud: codTipificacion };
      getListarTipoTipificacion(objTipificacion);
    }
  }, [codTipificacion]);

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
                disabled={!codtipoSolicitud && true}
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

          <div className="row mb-4">
            <label
              className="col-sm-12 col-md-12 col-lg-3 form-label text-capitalize fw-bold"
              htmlFor="tipoUsuario"
            >
              Detalle: <span className="text-danger">*</span>
            </label>
            <div className="col-sm-12 col-md-12 col-lg-9">
              <select
                className="form-select"
                onChange={(e) => setCodTipoTipificacion(e.target.value)}
                id="tipoUsuario"
                disabled={!codtipoSolicitud && true}
              >
                <option value="">--Seleccione--</option>
                {tipificacion && tipoTipificacion
                  ? tipoTipificacion.listado.map((opcion) => (
                      <option
                        key={opcion.idDetalleSolicitud}
                        value={opcion.idDetalleSolicitud}
                      >
                        {opcion.descripcion}
                      </option>
                    ))
                  : null}
              </select>
            </div>
          </div>
          {codTipoTipificacion ? (
            <div className="row">
              <label
                className="col-sm-12 col-md-12 col-lg-3 fw-bold"
                htmlFor="descripcion"
              >
                Descripción: <span className="text-danger">*</span>
              </label>
              <div className="col-sm-12 col-md-12 col-lg-9">
                <textarea className="form-control" id="descripcion"></textarea>
              </div>
            </div>
          ) : null}
        </div>
        {codTipoTipificacion ? (
          <>
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
          </>
        ) : null}
      </div>
    </>
  );
};

export default Tramites;
