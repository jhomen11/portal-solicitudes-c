import { createContext, useEffect, useState } from "react";
import clienteAxios from "../config/clienteAxios";


const AppContext = createContext();

const AppProvaider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [tipoUsuario, setTipoUsuario] = useState("");
    const [tipoSolicitud, setTipoSolicitud] = useState("");
    const [tipificacion, setTipificacion] = useState("")

    const getTipoUsuario = async () => {

        const request = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
          };
        const URL = `${process.env.REACT_APP_WS_SOLICITUDES_CIUDAD}/RS_ListarTipoUsuario`
        const resp = await fetch(URL, request)
        const data = await resp.json()
        setTipoUsuario(data)
        setIsLoading(false)
    }

    const getTipoSolicitud = async (tipoUsuario) => {
        const request = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(tipoUsuario)
          };
        const URL = `${process.env.REACT_APP_WS_SOLICITUDES_CIUDAD}/RS_ListarTipoSolicitud`
        const resp = await fetch(URL, request)
        const data = await resp.json()
        setTipoSolicitud(data)
        setIsLoading(false)
    }

    const getListarTipificacion = async (codtipoSolicitud) => {
        const request = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(codtipoSolicitud)
          };
        const URL = `${process.env.REACT_APP_WS_SOLICITUDES_CIUDAD}/RS_ListarTipificacion`
        const resp = await fetch(URL, request)
        const data = await resp.json()
        setTipificacion(data)
        setIsLoading(false)

    }

    useEffect(()=> {
        getTipoUsuario()
    },[])

    return (
        <AppContext.Provider
            value={{
                getTipoSolicitud,
                getListarTipificacion,
                tipoUsuario,
                tipoSolicitud,
                tipificacion,
                isLoading
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export { AppProvaider }

export default AppContext