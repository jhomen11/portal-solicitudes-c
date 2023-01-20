import { useState } from "react";

const useSelectList = (label, opciones) => {
    const [data, setData] = useState('')
  const SelectList = () => {
    
    return (
      <>
        <div className="row mb-4">
          <label
            className="col-sm-12 col-md-12 col-lg-3 form-label text-capitalize fw-bold"
            htmlFor="tipoUsuario"
          >
            {label}<span className="text-danger"> *</span>
          </label>
          <div className="col-sm-12 col-md-12 col-lg-9">
            <select
              className="form-select"
              value={data}
              onChange={e => setData(e.target.value)}
              id="tipoUsuario"
            >
              <option value="">--Seleccione--</option>
              {opciones.listado.map(opcion => (
                <option key={opcion.idTipoUsuario} value={opcion.idTipoUsuario}>{opcion.nombreTipoUsuario}</option>
              ))}
            </select>
          </div>
        </div>
      </>
    );
  };

  return [SelectList, data];
};

export default useSelectList;
