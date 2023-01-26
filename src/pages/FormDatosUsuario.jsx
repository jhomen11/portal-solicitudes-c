import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { validador } from "../helpers/validaRut";
import useAppContext from "../hooks/useAppContext";

const FormDatosUsuario = () => {
  const {
    listaRegiones,
    listaTipoIdentificacion,
    listaGenero,
    listaComunas,
    listaNacionalidad,
    datosPersona,
    getNombreRut,
    getListarComunas,
  } = useAppContext();
  const [identificacion, setIdentificacion] = useState("");

  const [infoUsuario, setInfoUsuario] = useState({
    tipoIdentificaion: "",
    nacionalidad: "",
    nombres: "",
    telefono1: "",
    apellidos: "",
    telefono2: "",
    genero: "",
    telefonoFijo: "",
    fechaNacimiento: "",
    email: "",
    region: "",
  });
  const [existePersona, setExistePersona] = useState(false);

  const {
    tipoIdentificaion,
    nacionalidad,
    nombres,
    telefono1,
    apellidos,
    telefono2,
    genero,
    telefonoFijo,
    fechaNacimiento,
    email,
    region,
  } = infoUsuario;

  useEffect(() => {
    if (region) {
      getListarComunas(region);
    }
  }, [region]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInfoUsuario({
      ...infoUsuario,
      [name]: value,
    });
  };

  const handleChangeRun = ({ target }) => {
    const { value } = target;
    setIdentificacion(value);
  };

  const rutValido = validador(identificacion);

  useEffect(() => {
    if (!rutValido) {
      
      console.log("RUN INVALIDO");
    }
  }, [identificacion]);

  const verificaRun = async () => {
    if (rutValido && identificacion.length > 4) {
      const objRun = { run: identificacion };
      const existePersona = await getNombreRut(objRun);
      if (existePersona.codigo === 0) {
        setExistePersona(true);
      }
      console.log(existePersona);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log([infoUsuario, { identificacion: identificacion }]);
  };
  return (
    <div className="container">

<div className="row">
              {" "}
              <strong
                style={{ width: "40%", textAlign: "center", marginBottom: 5 }}
                className="hola "
              >
                {" "}
                Paso 1{" "}
              </strong>{" "}
              <strong
                style={{ width: "20%", textAlign: "center", marginBottom: 5 }}
                className="hola"
              >
                {" "}
                Paso 2{" "}
              </strong>{" "}
            </div>

            <div className="prueba" style={{ height: "10px", width: "50%" }}>
              {" "}
            </div>

            <div className="progress">
              <div
                className="progress-bar "
                role="progressbar"
                style={{ width: "50%" }}
              >
                {" "}
                <strong> </strong>{" "}
              </div>
            </div>
            <div className="prueba" style={{ height: "10px", width: "50%" }}>
              {" "}
            </div>
            <div className="row">
              <strong
                style={{ width: "40%", textAlign: "center" }}
                className="hola"
              >
                {" "}
                Tipo Solicitud{" "}
              </strong>{" "}
              <strong
                style={{ width: "20%", textAlign: "center" }}
                className="hola"
              >
                {" "}
                Datos Solicitante y Afectado{" "}
              </strong>{" "}
            </div>

      <div className="row justify-content-center">
        <div className="col">
          <h3>Datos Solicitud</h3>
          <p>
            Por favor complete los datos a continuación asociados al tipo de
            solicitud a realizar
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row justify-content-center">
            <div className="border p-3">
              <div className="row p-3">
                {/* BLOQUE 1 */}
                <div className="col-sm-12 col-lg-6">
                  <div className="col-12 col-sm-12  d-flex flex-column flex-md-row  pe-4 mb-3 ">
                    <label
                      className="form-label col-sm-5 col-md-6 col-lg-5 fw-bold"
                      htmlFor="tipoIdentificacion"
                    >
                      Tipo identificacion:{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <div className="col-sm-12 col-md-6 col-lg-7">
                      <select
                        className="form-select"
                        id="tipoIdentificacion"
                        name="tipoIdentificaion"
                        onChange={handleChange}
                      >
                        <option>Seleccione</option>
                        {listaTipoIdentificacion.map((opcion) => (
                          <option
                            key={opcion.idIdentificacion}
                            value={opcion.idIdentificacion}
                          >
                            {opcion.descripcion}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  {tipoIdentificaion === "1" && (
                    <div className="col-12 col-sm-12  d-flex flex-column flex-md-row  pe-4 mb-3">
                      <label
                        className="form-label col-sm-5 col-md-6 col-lg-5 fw-bold"
                        htmlFor="identificacion"
                      >
                        RUN: <span className="text-danger">*</span>
                      </label>
                      <div className="col-sm-12 col-md-6 col-lg-7">
                        <input
                          type="text"
                          className="form-control"
                          name="identificacion"
                          value={identificacion}
                          onChange={handleChangeRun}
                          onKeyUp={verificaRun}
                          id="identificacion"
                        />
                      </div>
                    </div>
                  )}
                  {(tipoIdentificaion === "2" || tipoIdentificaion === "3") && (
                    <div className="col-12 col-sm-12  d-flex flex-column flex-md-row  pe-4 mb-3">
                      <label
                        className="form-label col-sm-5 col-md-6 col-lg-5 fw-bold"
                        htmlFor="identificacion"
                      >
                        N° Identificación:{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <div className="col-sm-12 col-md-6 col-lg-7">
                        <input
                          type="text"
                          className="form-control"
                          name="identificacion"
                          onChange={handleChange}
                          id="identificacion"
                        />
                      </div>
                    </div>
                  )}
                  <div className="col-12 col-sm-12  d-flex flex-column flex-md-row  pe-4 mb-3">
                    <label
                      className="form-label col-sm-5 col-md-6 col-lg-5 fw-bold"
                      htmlFor="nacionalidad"
                    >
                      Nacionalidad: <span className="text-danger">*</span>
                    </label>
                    <div className="col-sm-12 col-md-6 col-lg-7">
                      <select
                        className="form-select"
                        id="nacionalidad"
                        name="nacionalidad"
                        onChange={handleChange}
                      >
                        <option>Seleccione</option>
                        {listaNacionalidad.map((opcion) => (
                          <option
                            key={opcion.codigoPrincipal}
                            value={opcion.codigoPrincipal}
                          >
                            {opcion.descripcion}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12  d-flex flex-column flex-md-row  pe-4 mb-3">
                    <label
                      className="form-label col-sm-5 col-md-6 col-lg-5 fw-bold"
                      htmlFor="nombres"
                    >
                      Nombres: <span className="text-danger">*</span>
                    </label>
                    <div className="col-sm-12 col-md-6 col-lg-7">
                      <input
                        type="text"
                        className="form-control"
                        name="nombres"
                        value={existePersona ? datosPersona.nombres : nombres}
                        onChange={handleChange}
                        id="nombres"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12  d-flex flex-column flex-md-row  pe-4 mb-3">
                    <label
                      className="form-label col-sm-5 col-md-6 col-lg-5 fw-bold"
                      htmlFor="apellidos"
                    >
                      Apellidos: <span className="text-danger">*</span>
                    </label>
                    <div className="col-sm-12 col-md-6 col-lg-7">
                      <input
                        type="text"
                        className="form-control"
                        name="apellidos"
                        value={
                          existePersona
                            ? `${datosPersona.primerApellido} ${datosPersona.segundoApellido}`
                            : apellidos
                        }
                        onChange={handleChange}
                        id="apellidos"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12  d-flex flex-column flex-md-row  pe-4 mb-3">
                    <label
                      className="form-label col-sm-5 col-md-6 col-lg-5 fw-bold"
                      htmlFor="genero"
                    >
                      Genero: <span className="text-danger">*</span>
                    </label>
                    <div className="col-sm-12 col-md-6 col-lg-7">
                      <select
                        className="form-select"
                        id="genero"
                        name="genero"
                        onChange={handleChange}
                      >
                        <option>Seleccione</option>
                        {listaGenero.map((opcion) => (
                          <option
                            key={opcion.codigoPrincipal}
                            value={opcion.codigoPrincipal}
                          >
                            {opcion.descripcion}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12  d-flex flex-column flex-md-row  pe-4 mb-3">
                    <label
                      className="form-label col-sm-5 col-md-6 col-lg-5 fw-bold"
                      htmlFor="fechaNacimiento"
                    >
                      Fecha Nacimiento: <span className="text-danger">*</span>
                    </label>
                    <div className="col-sm-12 col-md-6 col-lg-7">
                      <input
                        type="date"
                        className="form-control"
                        name="fechaNacimiento"
                        onChange={handleChange}
                        id="fechaNacimiento"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12  d-flex flex-column flex-md-row  pe-4 mb-3">
                    <label
                      className="form-label col-sm-5 col-md-6 col-lg-5 fw-bold"
                      htmlFor="region"
                    >
                      Región: <span className="text-danger">*</span>
                    </label>
                    <div className="col-sm-12 col-md-6 col-lg-7">
                      <select
                        className="form-select"
                        id="region"
                        name="region"
                        onChange={handleChange}
                      >
                        <option value="">Seleccione</option>
                        {listaRegiones.map((opcion) => (
                          <option
                            key={opcion.codigoPrincipal}
                            value={opcion.codigoPrincipal}
                          >
                            {opcion.descripcion}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                {/* BLOQUE  2*/}
                <div className="col-sm-12 col-lg-6">
                  <div className="col-12 col-sm-12  d-flex flex-column flex-md-row  pe-4 mb-3">
                    <label
                      className="form-label col-sm-5 col-md-6 col-lg-5 fw-bold"
                      htmlFor="comuna"
                    >
                      Comuna: <span className="text-danger">*</span>
                    </label>
                    <div className="col-sm-12 col-md-6 col-lg-7">
                      <select
                        className="form-select"
                        id="comuna"
                        name="comuna"
                        onChange={handleChange}
                      >
                        <option>Seleccione</option>
                        {listaComunas.map((opcion) => (
                          <option
                            key={opcion.codigoPrincipal}
                            value={opcion.codigoPrincipal}
                          >
                            {opcion.descripcion}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12  d-flex flex-column flex-md-row  pe-4 mb-3">
                    <label
                      className="form-label col-sm-5 col-md-6 col-lg-5 fw-bold"
                      htmlFor="identificacion"
                    >
                      Direccion: <span className="text-danger">*</span>
                    </label>
                    <div className="col-sm-12 col-md-6 col-lg-7">
                      <input
                        type="text"
                        className="form-control"
                        name="identificacion"
                        onChange={handleChange}
                        id="identificacion"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12  d-flex flex-column flex-md-row  pe-4 mb-3">
                    <label
                      className="form-label col-sm-5 col-md-6 col-lg-5 fw-bold"
                      htmlFor="telefono1"
                    >
                      Teléfono 1: <span className="text-danger">*</span>
                    </label>
                    <div className="col-sm-12 col-md-6 col-lg-7">
                      <input
                        type="text"
                        className="form-control"
                        name="telefono1"
                        onChange={handleChange}
                        id="telefono1"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12  d-flex flex-column flex-md-row  pe-4 mb-3">
                    <label
                      className="form-label col-sm-5 col-md-6 col-lg-5 fw-bold"
                      htmlFor="telefono2"
                    >
                      Telefono 2:
                    </label>
                    <div className="col-sm-12 col-md-6 col-lg-7">
                      <input
                        type="text"
                        className="form-control"
                        name="telefono2"
                        onChange={handleChange}
                        id="telefono2"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12  d-flex flex-column flex-md-row  pe-4 mb-3">
                    <label
                      className="form-label col-sm-5 col-md-6 col-lg-5 fw-bold"
                      htmlFor="telefonoFijo"
                    >
                      Telefono fijo:
                    </label>
                    <div className="col-sm-12 col-md-6 col-lg-7">
                      <input
                        type="text"
                        className="form-control"
                        name="telefonoFijo"
                        onChange={handleChange}
                        id="telefonoFijo"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12  d-flex flex-column flex-md-row  pe-4 mb-3">
                    <label
                      className="form-label col-sm-5 col-md-6 col-lg-5 fw-bold"
                      htmlFor="email"
                    >
                      Email: <span className="text-danger">*</span>
                    </label>
                    <div className="col-sm-12 col-md-6 col-lg-7">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={handleChange}
                        id="email"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-danger fw-bold mt-3">* Datos obligatorios</p>
          <div className="row justify-content-center">
            <div className="col text-center mb-4">
              <Link to={"/"} className="btn btn-secondary me-2">
                Volver
              </Link>
              <input
                type="submit"
                className="btn btn-primary"
                value="Crear solicitud"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormDatosUsuario;
