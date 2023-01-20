import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: `REACT_APP_WS_SOLICITUDES_CIUDAD`
})

export default clienteAxios