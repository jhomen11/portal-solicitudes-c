import { createContext, useEffect, useState } from "react";
import clienteAxios from "../config/clienteAxios";

const AppContext = createContext();

const AppProvaider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [tipoUsuario, setTipoUsuario] = useState("");
  const [tipoSolicitud, setTipoSolicitud] = useState("");
  const [tipificacion, setTipificacion] = useState("");
  const [tipoTipificacion, setTipoTipificacion] = useState("");
  const [listaRequisitos, setListaRequisitos] = useState([]);
  const [listaRegiones, setListaRegiones] = useState([]);
  const [listaComunas, setListaComunas] = useState([]);
  const [listaTipoIdentificacion, setListaTipoIdentificacion] = useState([]);
  const [listaGenero, setListaGenero] = useState([]);
  const [listaNacionalidad, setListaNacionalidad] = useState([]);
  const [datosPersona, setDatosPersona] = useState({});
  const [desplegarRquisitos, setDesplegarRequisitos] = useState(0);

  //* LISTAR TIPO USUARIO
  const getTipoUsuario = async () => {
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    const URL = `${process.env.REACT_APP_WS_SOLICITUDES_CIUDAD}/RS_ListarTipoUsuario`;
    const resp = await fetch(URL, request);
    const data = await resp.json();
    if (data.codigo === 0 && data.listado) {
      setTipoUsuario(data.listado);
      setIsLoading(false);
    }
  };

  //* LISTAR TIPO SOLICITUD
  const getTipoSolicitud = async (tipoUsuario) => {
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tipoUsuario),
    };
    const URL = `${process.env.REACT_APP_WS_SOLICITUDES_CIUDAD}/RS_ListarTipoSolicitud`;
    const resp = await fetch(URL, request);
    const data = await resp.json();
    if (data.codigo === 0) {
      setTipoSolicitud(data);
      setIsLoading(false);
    }
  };

  const getListarTipificacion = async (codtipoSolicitud) => {
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(codtipoSolicitud),
    };
    const URL = `${process.env.REACT_APP_WS_SOLICITUDES_CIUDAD}/RS_ListarTipificacion`;
    const resp = await fetch(URL, request);
    const data = await resp.json();
    setTipificacion(data);
    setIsLoading(false);
  };

  const getListarTipoTipificacion = async (codtipoSolicitud) => {
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(codtipoSolicitud),
    };
    const URL = `${process.env.REACT_APP_WS_SOLICITUDES_CIUDAD}/RS_ListarTipoTipificacion`;
    const resp = await fetch(URL, request);
    const data = await resp.json();
    setTipoTipificacion(data);
    setIsLoading(false);
  };

  //* LISTAR REQUISITOS
  const getListarRequisitos = async (idDetalleSolicitud) => {
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(idDetalleSolicitud),
    };
    const URL = `${process.env.REACT_APP_WS_SOLICITUDES_CIUDAD}/RS_ListarRequisitosSolicitud`;
    const resp = await fetch(URL, request);
    const data = await resp.json();
    if (data.codigo === 0) {
      setListaRequisitos(data.listado);
      setDesplegarRequisitos(1);
      console.log(data);
    }
  };

  //* CONSULTA NOMBRE PERSONA
  const getNombreRut = async (rut) => {
    // console.log(rut)
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rut),
    };
    const URL = `${process.env.REACT_APP_WS_SOLICITUDES_CIUDAD}/RS_InformacionPersonaBD/ConsultaNombres`;
    const resp = await fetch(URL, request);
    const data = await resp.json();
    setDatosPersona(data)  
  };

  //* LISTAR REGIONES
  const getListarRegiones = async () => {
    const cuerpo = {
      headerRequest: {
        userID: "",
        rolID: "",
        SucursalID: "",
        fechaHora: "",
      },
      bodyRequest: {
        codigoTipoColeccion: 101,
        codigoItemPadre: "",
      },
    };
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cuerpo),
    };
    const URL = `${process.env.REACT_APP_WS_SOLICITUDES_CIUDAD}/RS_SIISColecciones`;
    const resp = await fetch(URL, request);
    const data = await resp.json();
    setListaRegiones(data.bodyResponse.coleccion.item);
  };
  
  //* LISTAR COMUNAS
  const getListarComunas = async (codigo) => {
    const cuerpo = {
      headerRequest: {
        userID: "",
        rolID: "",
        SucursalID: "",
        fechaHora: "",
      },
      bodyRequest: {
        codigoTipoColeccion: 103,
        codigoItemPadre: codigo,
      },
    };
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cuerpo),
    };
    const URL = `${process.env.REACT_APP_WS_SOLICITUDES_CIUDAD}/RS_SIISColecciones`;
    const resp = await fetch(URL, request);
    const data = await resp.json();
    setListaComunas(data.bodyResponse.coleccion.item);
  };
  //* LISTAR GENERO
  const getListarGenero = async () => {
    const cuerpo = {
      headerRequest: {
        userID: "",
        rolID: "",
        SucursalID: "",
        fechaHora: "",
      },
      bodyRequest: {
        codigoTipoColeccion: 4,
        codigoItemPadre: "",
      },
    };
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cuerpo),
    };
    const URL = `${process.env.REACT_APP_WS_SOLICITUDES_CIUDAD}/RS_SIISColecciones`;
    const resp = await fetch(URL, request);
    const data = await resp.json();
    setListaGenero(data.bodyResponse.coleccion.item);
  };

  //* LISTAR NACIONALIDAD
  const getListaNacionalidad = async () => {
    const cuerpo = {
      headerRequest: {
        userID: "",
        rolID: "",
        SucursalID: "",
        fechaHora: "",
      },
      bodyRequest: {
        codigoTipoColeccion: 7,
        codigoItemPadre: "",
      },
    };
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cuerpo),
    };
    const URL = `${process.env.REACT_APP_WS_SOLICITUDES_CIUDAD}/RS_SIISColecciones`;
    const resp = await fetch(URL, request);
    const data = await resp.json();
    setListaNacionalidad(data.bodyResponse.coleccion.item);
  };

  //* LISTAR TIPO IDENTIFICACION
  const getTipoIdentificacion = async () => {
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    const URL = `${process.env.REACT_APP_WS_SOLICITUDES_CIUDAD}/RS_ListarTipoIdentificacion`;
    const resp = await fetch(URL, request);
    const data = await resp.json();
    setListaTipoIdentificacion(data.listado)
  }

  useEffect(() => {
    getTipoUsuario();
    getListarRegiones();
    getTipoIdentificacion()
    getListarGenero()
    getListaNacionalidad()
  }, []);

  return (
    <AppContext.Provider
      value={{
        getTipoSolicitud,
        getListarTipificacion,
        getListarTipoTipificacion,
        getListarRequisitos,
        getListarComunas,
        getNombreRut,
        tipoUsuario,
        tipoSolicitud,
        tipificacion,
        tipoTipificacion,
        listaRequisitos,
        listaRegiones,
        listaComunas,
        listaTipoIdentificacion,
        listaGenero,
        listaNacionalidad,
        desplegarRquisitos,
        isLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvaider };

export default AppContext;
