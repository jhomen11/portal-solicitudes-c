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
                    <label className="form-label col-sm-5 col-md-7 col-lg-4 fw-bold">
                      Tipo identificacion:{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                      <select className="form-select">
                        <option>Seleccione</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 d-flex flex-column flex-lg-row pe-4">
                    <label className="form-label col-sm-5 col-md-7 col-lg-4 fw-bold">
                      Comuna: <span className="text-danger">*</span>
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                      <select className="form-select">
                        <option>Seleccione</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row p-3">
                <div className="col d-flex flex-column flex-md-row">
                  <div className="col-12 col-sm-12 col-md-6 d-flex flex-column flex-lg-row pe-4">
                    <label className="form-label col-sm-5 col-md-7 col-lg-4 fw-bold">
                      Nacionalidad: <span className="text-danger">*</span>
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                      <select className="form-select">
                        <option>Seleccione</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 d-flex flex-column flex-lg-row pe-4">
                    <label className="form-label col-sm-5 col-md-7 col-lg-4 fw-bold">
                      Direccion: <span className="text-danger">*</span>
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row p-3">
                <div className="col d-flex flex-column flex-md-row">
                  <div className="col-12 col-sm-12 col-md-6 d-flex flex-column flex-lg-row pe-4">
                    <label className="form-label col-sm-5 col-md-7 col-lg-4 fw-bold">
                      Nombres: <span className="text-danger">*</span>
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 d-flex flex-column flex-lg-row pe-4">
                    <label className="form-label col-sm-5 col-md-7 col-lg-4 fw-bold">
                      Telefono 1: <span className="text-danger">*</span>
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row p-3">
                <div className="col d-flex flex-column flex-md-row">
                  <div className="col-12 col-sm-12 col-md-6 d-flex flex-column flex-lg-row pe-4">
                    <label className="form-label col-sm-5 col-md-7 col-lg-4 fw-bold">
                      Apellidos: <span className="text-danger">*</span>
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 d-flex flex-column flex-lg-row pe-4">
                    <label className="form-label col-sm-5 col-md-7 col-lg-4 fw-bold">
                      Telefono 2:
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row p-3">
                <div className="col d-flex flex-column flex-md-row">
                  <div className="col-12 col-sm-12 col-md-6 d-flex flex-column flex-lg-row pe-4">
                    <label className="form-label col-sm-5 col-md-7 col-lg-4 fw-bold">
                      Genero: <span className="text-danger">*</span>
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                      <select className="form-select">
                        <option>Seleccione</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 d-flex flex-column flex-lg-row pe-4">
                    <label className="form-label col-sm-5 col-md-7 col-lg-4 fw-bold">
                      Telefono fijo:
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row p-3">
                <div className="col d-flex flex-column flex-md-row">
                  <div className="col-12 col-sm-12 col-md-6 d-flex flex-column flex-lg-row pe-4">
                    <label className="form-label col-sm-5 col-md-7 col-lg-4 fw-bold">
                      Fecha Nacimiento: <span className="text-danger">*</span>
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                      <input type="date" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 d-flex flex-column flex-lg-row pe-4">
                    <label className="form-label col-sm-5 col-md-7 col-lg-4 fw-bold">
                      Email: <span className="text-danger">*</span>
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row p-3">
                <div className="col d-flex flex-column flex-md-row">
                  <div className="col-12 col-sm-12 col-md-6 d-flex flex-column flex-lg-row pe-4">
                    <label className="form-label col-sm-5 col-md-7 col-lg-4 fw-bold">
                      Región: <span className="text-danger">*</span>
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                      <select className="form-select">
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
