import { useContext } from 'react'
import AppContext from '../context/AppProvaider'

const useAppContext = () => {
    return  useContext(AppContext)
}

export default useAppContext