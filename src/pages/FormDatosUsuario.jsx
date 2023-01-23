import React, { useState } from "react";
import { Link } from "react-router-dom";

const FormDatosUsuario = () => {
  const [infoUsuario, setInfoUsuario] = useState({
    tipoIdentificaion: "",
    nacionalidad: "",
    nombres: "  ",
  });

  const { tipoIdentificaion, nacionalidad, nombres } = infoUsuario;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInfoUsuario({
      ...infoUsuario,
      [name]: value,
    });
  };
  return (
    <>
      <div className="row justify-content-center">
        <div className="col">
          <h3>Datos Solicitud</h3>
          <p>
            Por favor complete los datos a continuación asociados al tipo de
            solicitud a realizar
          </p>
        </div>
        <form action="" className="">
          <div className="row justify-content-center">
            <div className="border p-3">
              <div className="row p-3">
                <div className="col d-flex flex-column flex-md-row">
                  <div className="col-12 col-sm-12 col-md-6 d-flex flex-column flex-lg-row pe-4">
                    <label className="form-label col-sm-5 col-md-7 col-lg-4 fw-bold" htmlFor="tipoIdentificacion">
                      Tipo identificacion: <span className="text-danger">*</span>
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                      <select className="form-select" id="tipoIdentificacion">
                        <option>Seleccione</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 d-flex flex-column flex-lg-row pe-4">
                    <label className="form-label col-sm-5 col-md-7 col-lg-4 fw-bold" htmlFor="comuna">
                      Comuna: <span className="text-danger">*</span>
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                      <select className="form-select" id="comuna">
                        <option>Seleccione</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row p-3">
                <div className="col d-flex flex-column flex-md-row">
                  <div className="col-12 col-sm-12 col-md-6 d-flex flex-column flex-lg-row pe-4">
                    <label className="form-label col-sm-5 col-md-7 col-lg-4 fw-bold" htmlFor="nacionalidad">
                      Nacionalidad: <span className="text-danger">*</span>
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                      <select className="form-select" id="nacionalidad">
                        <option>Seleccione</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 d-flex flex-column flex-lg-row pe-4">
                    <label className="form-label col-sm-5 col-md-7 col-lg-4 fw-bold" htmlFor="direccion">
                      Dirección: <span className="text-danger">*</span>
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                      <input type="text" className="form-control" name="direccion" id="direccion"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row p-3">
                <div className="col d-flex flex-column flex-md-row">
                  <div className="col-12 col-sm-12 col-md-6 d-flex flex-column flex-lg-row pe-4">
                    <label className="form-label col-sm-5 col-md-7 col-lg-4 fw-bold" htmlFor="nombres">
                      Nombres: <span className="text-danger">*</span>
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                      <input type="text" className="form-control" name="nombres" id="nombres"/>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 d-flex flex-column flex-lg-row pe-4">
                    <label className="form-label col-sm-5 col-md-7 col-lg-4 fw-bold" htmlFor="telefono1">
                      Telefono 1: <span className="text-danger">*</span>
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                      <input type="text" className="form-control" name="telefono1" id="telefono1"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row p-3">
                <div className="col d-flex flex-column flex-md-row">
                  <div className="col-12 col-sm-12 col-md-6 d-flex flex-column flex-lg-row pe-4">
                    <label className="form-label col-sm-5 col-md-7 col-lg-4 fw-bold" htmlFor="apellidos">
                      Apellidos: <span className="text-danger">*</span>
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                      <input type="text" className="form-control" name="apellidos" id="apellidos"/>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 d-flex flex-column flex-lg-row pe-4">
                    <label className="form-label col-sm-5 col-md-7 col-lg-4 fw-bold" htmlFor="telefono2">
                      Telefono 2:
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                      <input type="text" className="form-control" name="telefono2" id="telefono2"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row p-3">
                <div className="col d-flex flex-column flex-md-row">
                  <div className="col-12 col-sm-12 col-md-6 d-flex flex-column flex-lg-row pe-4">
                    <label className="form-label col-sm-5 col-md-7 col-lg-4 fw-bold" htmlFor="genero">
                      Genero: <span className="text-danger">*</span>
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                      <select className="form-select" id="genero">
                        <option>Seleccione</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 d-flex flex-column flex-lg-row pe-4">
                    <label className="form-label col-sm-5 col-md-7 col-lg-4 fw-bold" htmlFor="telefonoFijo">
                      Telefono fijo:
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                      <input type="text" className="form-control" name="telefonoFijo" id="telefonoFijo"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row p-3">
                <div className="col d-flex flex-column flex-md-row">
                  <div className="col-12 col-sm-12 col-md-6 d-flex flex-column flex-lg-row pe-4">
                    <label className="form-label col-sm-5 col-md-7 col-lg-4 fw-bold" htmlFor="fechaNacimiento">
                      Fecha Nacimiento: <span className="text-danger">*</span>
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                      <input type="date" className="form-control" name="fechaNacimiento" id="fechaNacimiento"/>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 d-flex flex-column flex-lg-row pe-4">
                    <label className="form-label col-sm-5 col-md-7 col-lg-4 fw-bold" htmlFor="email">
                      Email: <span className="text-danger">*</span>
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                      <input type="email" className="form-control" name="email" id="email"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row p-3">
                <div className="col d-flex flex-column flex-md-row">
                  <div className="col-12 col-sm-12 col-md-6 d-flex flex-column flex-lg-row pe-4">
                    <label className="form-label col-sm-5 col-md-7 col-lg-4 fw-bold" htmlFor="region">
                      Región: <span className="text-danger">*</span>
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                      <select className="form-select" id="region">
                        <option value="">Seleccione</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-danger fw-bold mt-3">* Datos obligatorios</p>
          <div className="row justify-content-center">
            <div className="col text-center">
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
    </>
  );
};

export default FormDatosUsuario;
