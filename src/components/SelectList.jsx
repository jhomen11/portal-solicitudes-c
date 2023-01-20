import { useEffect } from "react";



const SelectList = ({ titulo, data, handleChange, id }) => {
  return (
    <div className="row mb-4">
      <label
        className="col-sm-3 form-label text-capitalize fw-bold"
        htmlFor="tipoUsuario"
      >
        {titulo}: <span className="text-danger">*</span>
      </label>
      <div className="col-sm-9">
        <select
          className="form-select"
          id="tipoUsuario"
          disabled={!data && true}
          onChange={handleChange}
        >
          <option value="">--Seleccione--</option>
          {data.listado
            ? data.listado.map((el) => {
             console.log(el)
              return (
             <option key={id} value={el.idSubTipoSolicitud}>
               {el.descripcion}
             </option>
           )
            } )
            : null}
        </select>
      </div>
    </div>
  );
};

export default SelectList;
