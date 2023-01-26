import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InputFile from "../components/InputFile";
import useAppContext from "../hooks/useAppContext";
import useSelectList from "../hooks/useSelectList";

const Tramites = () => {
  const {
    tipoUsuario,
    tipoSolicitud,
    tipificacion,
    tipoTipificacion,
    desplegarRquisitos,
    isLoading,
    getTipoSolicitud,
    getListarTipificacion,
    getListarTipoTipificacion,
    getListarRequisitos,
  } = useAppContext();


  const [codtipoUsuario, setCodTipoUsuario] = useState("");
  const [codtipoSolicitud, setCodTipoSolicitud] = useState("");
  const [codTipificacion, setCodTipificacion] = useState("");
  const [codTipoTipificacion, setCodTipoTipificacion] = useState("");

  useEffect(() => {
    if (codtipoUsuario) {
      setCodTipoSolicitud(null)
      setCodTipificacion(null)
      setCodTipoTipificacion(null)
      const objTipousuario = {
        tipoUsuario: codtipoUsuario,
      };
      getTipoSolicitud(objTipousuario);
    }
    if(codtipoUsuario === ""){
      setCodTipoSolicitud(null)
    }
  }, [codtipoUsuario]);


  useEffect(() => {
    const objTipificacion = { idTipoSolicitud: codtipoSolicitud };
    if (codtipoSolicitud) {
      getListarTipificacion(objTipificacion);
    }
    if(codtipoSolicitud === ""){
      setCodTipificacion(null)
    }
    
  }, [codtipoSolicitud]);

  useEffect(() => {
    if (codTipificacion) {
      const objTipificacion = { idSubTipoSolicitud: codTipificacion };
      getListarTipoTipificacion(objTipificacion);
    }
    if(codTipificacion === ""){
      setCodTipoTipificacion(null)
    }
  }, [codTipificacion]);

  useEffect(() => {
    if (codTipoTipificacion) {
      const objTipificacion = { idDetalleSolicitud: codTipoTipificacion };
      getListarRequisitos(objTipificacion);
    }
  }, [codTipoTipificacion]);

  return (
    <div className="container">
    <div className="my-5">
          
          <strong
            style={{ width: "40%", textAlign: "center", marginBottom: 5 }}
            className="hola"
          >
            {" "}
            Paso 1{" "}
          </strong>{" "}
          <div className="prueba" style={{ height: "10px", width: "20%" }}>
            {" "}
          </div>
          <div className="progress">
            <div
              className="progress-bar "
              role="progressbar"
              style={{ width: "20%" }}
            >
              {" "}
              <strong> </strong>{" "}
            </div>
          </div>
          <div className="prueba" style={{ height: "10px", width: "20%" }}>
            {" "}
          </div>
          <strong
            style={{ width: "40%", textAlign: "center" }}
            className="hola"
          >
            {" "}
            Tipo Solicitud{" "}
          </strong>{" "}
        </div>
      <div className="row justify-content-center">
        <div className="col-9">
          <h3>Datos Solicitud</h3>
          <p>
            Por favor complete los datos a continuación asociados al tipo de
            solicitud a realizar
          </p>
        </div>
        <div className="col-12 border p-4">
          {/* {isLoading ? null : <SelectTipoUsuario />} */}

          <div className="row mb-4">
            <label
              className="col-sm-12 col-md-12 col-lg-3 form-label text-capitalize fw-bold"
              htmlFor="tipoSolicitud"
            >
              Tipo Usuario: <span className="text-danger">*</span>
            </label>
            <div className="col-sm-12 col-md-12 col-lg-7">
              <select
                className="form-select"
                onChange={(e) => setCodTipoUsuario(e.target.value)}
                id="tipoSolicitud"
              >
                <option value="">--Seleccione--</option>
                {
                  isLoading ? null :
                  tipoUsuario.map((opcion) => (
                    <option key={opcion.idTipoUsuario} value={opcion.idTipoUsuario}>{opcion.nombreTipoUsuario}</option>
                  ))
                }
              </select>
            </div>
          </div>

          <div className="row mb-4">
            <label
              className="col-sm-12 col-md-12 col-lg-3 form-label text-capitalize fw-bold"
              htmlFor="tipoSolicitud"
            >
              Tipo: <span className="text-danger">*</span>
            </label>
            <div className="col-sm-12 col-md-12 col-lg-7">
              <select
                className="form-select"
                onChange={(e) => setCodTipoSolicitud(e.target.value)}
                id="tipoSolicitud"
                disabled={!codtipoUsuario && true}
              >
                <option value="">--Seleccione--</option>
                {tipoSolicitud && codtipoUsuario
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
            <div className="col-sm-12 col-md-12 col-lg-7">
              <select
                className="form-select"
                onChange={(e) => setCodTipificacion(e.target.value)}
                id="tipoUsuario"
                disabled={!codtipoSolicitud && true}
              >
                <option value="">--Seleccione--</option>
                {codtipoSolicitud && tipificacion
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
            <div className="col-sm-12 col-md-12 col-lg-7">
              <select
                className="form-select"
                onChange={(e) => setCodTipoTipificacion(e.target.value)}
                id="tipoUsuario"
                disabled={!codTipificacion && true}
              >
                <option value="">--Seleccione--</option>
                {codTipificacion && tipoTipificacion
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
          {codTipoTipificacion && desplegarRquisitos === 1 ? (
            <div className="row">
              <label
                className="col-sm-12 col-md-12 col-lg-3 fw-bold"
                htmlFor="descripcion"
              >
                Descripción: <span className="text-danger">*</span>
              </label>
              <div className="col-sm-12 col-md-12 col-lg-7">
                <textarea className="form-control" id="descripcion"></textarea>
              </div>
            </div>
          ) : null}
        </div>
        {codTipoTipificacion && desplegarRquisitos === 1 ? (
          <>
            <div className="col-12 mt-4">
              <h3>Datos Solicitud</h3>
              <p>
                Por favor complete los datos a continuación asociados al tipo de
                solicitud a realizar
              </p>
            </div>
            <div className="col-12 border p-4">
              <InputFile />
            </div>
          </>
        ) : null}
      </div>
      <p className="text-danger fw-bold mt-3">* Datos obligatorios</p>
      <div className="row justify-content-center">
        <div className="col text-center mb-4">
          <Link to={"/form-datos-usuario"} className="btn btn-primary me-2">
            Continuar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tramites;
