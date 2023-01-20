import React from "react";

const InputFile = () => {
  return (
    <div className="row mb-4">
      <label className="col-sm-3 form-label text-capitalize fw-bold" htmlFor="inputFile">Subir Archivos</label>
      <div className="col-sm-9">
        <input className="form-control" type="file" id="inputFile" />
        <p className="fw-bold">Si el nombre del archivo cuenta con caracteres especiales no permitidos, los mismos serán reemplazados para evitar problemas en la carga de archivos. <br />
        Formatos permitidos: <span className="fw-normal">.pdf,.doc,.docx,.jpg,.jpeg,.png</span><br />
        <span className="fw-bold">Peso máx. permitido 20MB</span></p>
      </div>
    </div>
  );
};

export default InputFile;
