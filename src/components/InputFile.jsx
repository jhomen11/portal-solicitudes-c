import React, { useState } from "react";
import useAppContext from "../hooks/useAppContext";

const InputFile = () => {
  const { listaRequisitos } = useAppContext();
  const [requisitos, setRequisitos] = useState([]);
  // let arrayRequisitos = []
  // // console.log("listaRequisitos", listaRequisitos.listado);
  // const long = listaRequisitos.listado.length;

  // for (let i = 0; i < long; i++) {
  //   //let listado = listaRequisitos.listado[i];
  //   let requisito = {};
  //   requisito.idRequisitos = listaRequisitos.listado[i].idRequisitos;
  //   requisito.nombre = listaRequisitos.listado[i].nombre;
  //   requisito.tipo = listaRequisitos.listado[i].tipo;
  //   requisito.adjunto = listaRequisitos.listado[i].adjunto;
  //   requisito.obligarorio = listaRequisitos.listado[i].obligarorio;

  //   arrayRequisitos.push(requisito);
  // }

  // console.log("array", arrayRequisitos);

  return (
    <>
      {listaRequisitos.listado?.map(
        (req) =>
          req.idRequisitos === 3 || (
            <div className="row mb-4" key={req.idRequisitos}>
              <label
                className="col-sm-12 col-md-12 col-lg-3 form-label text-capitalize fw-bold"
                htmlFor="inputFile"
              >
                Canal Atención <span className="text-danger">*</span>
              </label>
              <div className="col-sm-12 col-md-12 col-lg-7">
                <select name="" id="" className="form-select">
                  <option value="">Seleccione</option>
                </select>
              </div>
            </div>
          )
      )}

      <div className="row mb-4">
        <label
          className="col-sm-12 col-md-12 col-lg-3 form-label text-capitalize fw-bold"
          htmlFor="inputFile"
        >
          Subir Archivos
        </label>
        <div className="col-sm-12 col-md-12 col-lg-7">
          <input className="form-control" type="file" id="inputFile" />
          <p className="fw-bold">
            Si el nombre del archivo cuenta con caracteres especiales no
            permitidos, los mismos serán reemplazados para evitar problemas en
            la carga de archivos. <br />
            Formatos permitidos:{" "}
            <span className="fw-normal">.pdf,.doc,.docx,.jpg,.jpeg,.png</span>
            <br />
            <span className="fw-bold">Peso máx. permitido 20MB</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default InputFile;
